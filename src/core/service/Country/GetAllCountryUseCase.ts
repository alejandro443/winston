import { CountryService } from 'src/domain/services/CountryService/CountryService';

export class GetAllCountryUseCase {
  constructor(private countryService?: CountryService) {
    this.countryService = new CountryService();
  }

  async getAllCountry() {
    try {
      const response = await this.countryService?.getAllCountry();
      return response.map((country: any) => ({
        id: country.id,
        name: country.name,
        code_ISO: country.code_ISO,
        currency: country.currency,
        language: country.language,
        region_id: country.region_id,
        phone_code: country.phone_code,
        tax_rate: country.tax_rate,
        timezone: country.timezone,
        active: country.active,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
