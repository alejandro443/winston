import { CountryService } from 'src/domain/services/CountryService/CountryService';

export class DeleteCountryUseCase {
  constructor(private countryService?: CountryService) {
    this.countryService = new CountryService();
  }

  async deleteCountry(id: number) {
    try {
      const response = await this.countryService?.deleteCountry(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
