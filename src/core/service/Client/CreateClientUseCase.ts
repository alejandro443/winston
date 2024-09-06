import { ClientService } from 'src/domain/services/ClientService/ClientService';
import { NewClientDto } from 'src/core/shared/dto/Client/client_dto';
import { ClientApplicationError } from '@src/core/shared/error/ClientApplicationError';
import { PersonService } from '@src/domain/services/PersonService/PersonService';
import { TypeEntity } from '@src/infraestructure/shared/enums/TypeEntity';
import { CompanyWorkerService } from '@src/domain/services/CompanyWorkerService/CompanyWorkerService';
import { DeliveryPointService } from '@src/domain/services/DeliveryPointService/DeliveryPointService';
import { ClientDeliveryPointService } from '@src/domain/services/ClientDeliveryPointService/ClientDeliveryPointService';
import { ZoneDetailService } from '@src/domain/services/ZoneDetailService/ZoneDetailService';

export class CreateClientUseCase {
  constructor(
    private clientService?: ClientService,
    private personService?: PersonService,
    private companyWorkerService?: CompanyWorkerService,
    private deliveryPointService?: DeliveryPointService,
    private clientDeliveryPointService?: ClientDeliveryPointService,
    private zoneDetailService?: ZoneDetailService
  ) {
    this.clientService = new ClientService();
    this.personService = new PersonService();
    this.companyWorkerService = new CompanyWorkerService();
    this.deliveryPointService = new DeliveryPointService();
    this.clientDeliveryPointService = new ClientDeliveryPointService();
    this.zoneDetailService = new ZoneDetailService();
  }

  async createClient(client: NewClientDto) {
    try {
      // Create entity of client Person / Company
      const response: any = await this.clientService?.createClient(client);
      if (!response) throw new ClientApplicationError('Error en la creación de cliente.', 'INTERNAL_SERVER_ERROR')

      // Create Managers of client
      if (client.manager_details.length && client.type_entity == TypeEntity.COMPANY) {
        await this.CreateManager(client.manager_details, response.entity_id);
      }

      if (client.delivery_data.length) {
        await this.CreateDeliveryPoints(client.delivery_data, response.id);
      }

      if(client.zone_id){
        await this.CreateZoneDetail(response.id, client.zone_id)
      } else {
        await this.CreateZoneDetail(response.id)
      }
      
      return { ...response.dataValues };
    } catch (error: any) {
      throw new ClientApplicationError(error)
    }
  };

  async CreateManager(managers_data: Array<object>, company_id: number) {
    try {
      managers_data.forEach(async (entity: any) => {
        const response: any = await this.personService.createPerson(entity)
        if (!response) throw new ClientApplicationError('Error en la creación de cliente.', 'INTERNAL_SERVER_ERROR');

        var company_worker_data: any = {
          company_id: company_id,
          person_id: response.id,
          company_position_id: entity.company_position_id,
          company_area_id: entity.company_area_id
        }
  
        // Company worker is created
        await this.companyWorkerService.createCompanyWorker(company_worker_data)
      });
    } catch (error: any) {
      throw new ClientApplicationError(error)
    }
  }
  
  async CreateDeliveryPoints(delivery_data: Array<object>, client_id: number) {
    try {
      delivery_data.forEach(async (entity: any) => {
        const response: any = await this.personService.createPerson(entity.responsible);
  
        if (!response) throw new ClientApplicationError('Error en la creación de cliente > Responsable.', 'INTERNAL_SERVER_ERROR');
  
        var delivery_point_new: any = {
          name: entity.name,
          reference: entity.reference,
          direction: entity.direction,
          location: entity.location,
          schedule: entity.schedule,
          responsible_id: response.id
        }
  
        const response_delivery_point: any = this.deliveryPointService.createDeliveryPoint(delivery_point_new);
        if (!response_delivery_point) throw new ClientApplicationError('Error en la creación de cliente > Punto de entrega.', 'INTERNAL_SERVER_ERROR');
  
        this.clientDeliveryPointService.createClientDeliveryPoint({
          client_id: client_id,
          delivery_point_id: response_delivery_point.id
        })
      });
    } catch (error) {
      throw new ClientApplicationError(error)
    }
  }

  async CreateZoneDetail(client_id: number, zone_id: number = 1){
    try {
      await this.zoneDetailService.createZoneDetail({
        zone_id: zone_id,
        client_id: client_id
      })
    } catch (error) {
      throw new ClientApplicationError(error)
    }
  }

  async CreateClientAgent(client_id: number, agent_id: number){
    
  }
}