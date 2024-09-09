import { PersonService } from 'src/domain/services/PersonService/PersonService';
import { PersonApplicationError } from '@src/core/shared/error/PersonApplicationError';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { CompanyService } from '@src/domain/services/CompanyService/CompanyService';

export class SearchByDocumentUseCase {
  private readonly apiUrl = 'https://api.apis.net.pe/v1/';

  constructor(
    private personService?: PersonService,
    private companyService?: CompanyService,
  ) {
    this.personService = new PersonService();
    this.companyService = new CompanyService();
  }

  async SearchByDocumentReniec(main_identification: string) {
    try {
      var data: any = (await this.personService?.getOnePerson(main_identification));
      let response = data?.dataValues ?? null;

      if(response){
        response = {
          type: 'owner',
          name: response.name,
          lastname: response.last_name,
          main_identification: response.main_identification
        }
      }else {
        // Referencia de TODO [TODO1]
        const httpService: HttpService = new HttpService();

        const result = await lastValueFrom(httpService.get(`${this.apiUrl}/dni?numero=${main_identification}`));
        response = {
          type: 'reniec',
          name: result.data.nombres,
          father_lastname: result.data.apellidoPaterno,
          mother_lastname: result.data.apellidoMaterno,
          main_identification: result.data.numeroDocumento
        }
      }

      return { ...response };
    } catch (error: any) {
      throw new PersonApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }
  
  async SearchByDocumentSunat(main_identification: string) {
    try {
      // Referencia de TODO [TODO1]

      var data: any = (await this.companyService?.getOneCompany(main_identification));
      let response = data?.dataValues ?? null;

      if(response){
        response = {
          type: 'owner',
          name: response.name,
          main_identification: response.main_identification,
          condition: response.condition,
          status: response.status
        }
      }else {
        const httpService: HttpService = new HttpService();

        const result = await lastValueFrom(httpService.get(`${this.apiUrl}/ruc?numero=${main_identification}`));
        response = {
          type: 'sunat',
          name: result.data.nombre,
          main_identification: result.data.numeroDocumento,
          condition: result.data.condicion,
          status: result.data.estado
        }
      }

      return { ...response };
    } catch (error: any) {
      throw new PersonApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }
}
