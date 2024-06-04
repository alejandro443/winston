import { ClientService } from 'src/domain/services/ClientService/ClientService';
import { NewClientDto } from 'src/core/shared/dto/Client/client_dto';
import { ClientApplicationError } from '@src/core/shared/error/ClientApplicationError';
import { PersonService } from '@src/domain/services/PersonService/PersonService';
import { TypeEntity } from '@src/infraestructure/shared/enums/TypeEntity';
import { CompanyWorkerService } from '@src/domain/services/CompanyWorkerService/CompanyWorkerService';

export class CreateClientUseCase {
  constructor(
    private clientService?: ClientService, 
    private personService?: PersonService,
    private companyWorkerService?: CompanyWorkerService
  ) {
    this.clientService = new ClientService();
    this.personService = new PersonService();
  }

  async createClient(client: NewClientDto) {
    try {
      const response: any = await this.clientService?.createClient(client);
      
      if(!response) throw new ClientApplicationError('Error en la creación de cliente.', 'INTERNAL_SERVER_ERROR')

      if(client.manager_details.length && client.type_entity == TypeEntity.COMPANY){
        client.manager_details.forEach(async(entity: any )=> {
          var person_id: any = await this.personService.createPerson(entity)
          
          if(!person_id) throw new ClientApplicationError('Error en la creación de cliente.', 'INTERNAL_SERVER_ERROR');

          var company_worker_data: any = {
            company_id: response.entity_id,
            person_id: person_id,
            company_position_id: entity.company_position_id,
            company_area_id: entity.company_area_id
          }
          this.companyWorkerService.createCompanyWorker(company_worker_data)
        });
      }

      return { ...response.dataValues };
    } catch (error: any) {
      throw new ClientApplicationError(error)
    }
  }
}
