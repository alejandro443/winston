import { CountryApplicationError } from '@src/core/shared/error/CountryApplicationError';
import { NewCountryDto } from 'src/core/shared/dto/Country/country_dto';
import { CountryRepository } from 'src/domain/repositories/CountryRepository/CountryRepository';

export class CountryService {
  constructor(private repository?: CountryRepository) {
    this.repository = new CountryRepository();
  }

  async getAllCountry() {
    try {
      return this.repository.findAll();
    } catch (error: any) {
      throw new CountryApplicationError(error.message);
    }
  }

  async getOneCountry(id: number) {
    try {
      return this.repository.findOne(id);
    } catch (error: any) {
      throw new CountryApplicationError(error.message);
    }
  }

  async createCountry(country: NewCountryDto) {
    try {
      return this.repository.create(country);
    } catch (error: any) {
      throw new CountryApplicationError(error.message);
    }
  }

  async updateCountry(id: number, country: NewCountryDto) {
    try {
      return this.repository.update(id, country);
    } catch (error: any) {
      throw new CountryApplicationError(error.message);
    }
  }

  async deleteCountry(id: number) {
    try {
      return this.repository.deleted(id);
    } catch (error: any) {
      throw new CountryApplicationError(error.message);
    }
  }
}
