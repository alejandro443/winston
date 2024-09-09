import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class SunatApiClient {
  private readonly apiUrl = 'https://api.apis.net.pe/v1/ruc';
  // private readonly apiKey = 'YOUR_API_KEY';

  constructor(private readonly httpService: HttpService) {}

  async getData(document: string): Promise<any> {
    try {
      const response = this.httpService.get(`${this.apiUrl}?numero=${document}`);
      const result = await lastValueFrom(response);

      var data_transform = {
        name: result.data.nombre,
        main_identification: result.data.numeroDocumento,
        status: result.data.status,
        condition: result.data.condition
      }

      return data_transform;
    } catch (error) {
      return {}
    }
  }
}
