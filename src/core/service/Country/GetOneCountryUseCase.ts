import { CountryService } from 'src/domain/services/CountryService/CountryService';

export class GetOneCountryUseCase {
  constructor(private countryService?: CountryService) {
    this.countryService = new CountryService();
  }

  async getOneCountry(id: number) {
    try {
      const response = await this.countryService?.getOneCountry(id);
      return {
        id: response.id,
        name: response.name,
        code_ISO: response.code_ISO,
        currency: response.currency,
        language: response.language,
        region_id: response.region_id,
        phone_code: response.phone_code,
        tax_rate: response.tax_rate,
        timezone: response.timezone,
        active: response.active,
      };
    } catch (error: any) {
      return error;
    }
  }
}
