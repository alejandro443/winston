import { UbigeoService } from 'src/domain/services/UbigeoService/UbigeoService';

export class SearchSensitiveUbigeoUseCase {
  constructor(private ubigeoService?: UbigeoService) {
    this.ubigeoService = new UbigeoService();
  }

  async searchSensitive(searchTerm: string) {
    try {
      const response: any =
        await this.ubigeoService?.searchSensitive(searchTerm);

      return response.map((ubigeo: any) => ({ ...ubigeo.dataValues }));
    } catch (error: any) {
      return error;
    }
  }
}
