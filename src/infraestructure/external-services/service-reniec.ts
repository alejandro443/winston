import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

// TO DO: Realizar y hacer funcionar esto de acuerdo a las buenas practicas con injeccion de dependencias - Referencia de busqueda de TODO [TODO1]
@Injectable()
export class ReniecApiClient {
  private readonly apiUrl = 'https://api.apis.net.pe/v1/dni';
  // private readonly apiKey = 'YOUR_API_KEY';

  constructor(private readonly httpService: HttpService) {}

  async getData(document: string): Promise<any> {
    try {
      const response = this.httpService.get(`${this.apiUrl}?numero=${document}`);
      const result = await lastValueFrom(response);

      var data_transform = {
        name: result.data.nombres,
        father_lastname: result.data.apellidoPaterno,
        mother_lastname: result.data.apellidoMaterno,
        main_identification: result.data.numeroDocumento
      }

      return data_transform;
    } catch (error) {
      throw new Error(`Error fetching reniec data: ${error.message}`);
    }
  }
}
