import { CountryApplication } from 'src/core/application/Country/CountryApplication';
import {
  NewCountryDto,
  UpdateCountryDto,
} from 'src/core/shared/dto/Country/country_dto';
import { GetOneCountryUseCase } from './GetOneCountryUseCase';
import { GetAllCountryUseCase } from './GetAllCountryUseCase';
import { CreateCountryUseCase } from './CreateCountryUseCase';
import { UpdateCountryUseCase } from './UpdateCountryUseCase';
import { DeleteCountryUseCase } from './DeleteCountryUseCase';

export class CountryApplicationService implements CountryApplication {
  constructor(
    private getAllUseCase?: GetAllCountryUseCase,
    private getOneUseCase?: GetOneCountryUseCase,
    private createUseCase?: CreateCountryUseCase,
    private updateUseCase?: UpdateCountryUseCase,
    private deleteUseCase?: DeleteCountryUseCase,
  ) {
    this.getAllUseCase = new GetAllCountryUseCase();
    this.getOneUseCase = new GetOneCountryUseCase();
    this.createUseCase = new CreateCountryUseCase();
    this.updateUseCase = new UpdateCountryUseCase();
    this.deleteUseCase = new DeleteCountryUseCase();
  }

  async getAllCountry() {
    try {
      return this.getAllUseCase?.getAllCountry();
    } catch (error: any) {
      return error;
    }
  }

  async getOneCountry(country_id: number) {
    try {
      return this.getOneUseCase?.getOneCountry(country_id);
    } catch (error: any) {
      return error;
    }
  }

  async createCountry(country: NewCountryDto) {
    try {
      return this.createUseCase?.createCountry(country);
    } catch (error: any) {
      return error;
    }
  }

  async updateCountry(id: number, country: UpdateCountryDto) {
    try {
      return this.updateUseCase?.updateCountry(id, country);
    } catch (error: any) {
      return error;
    }
  }

  async deleteCountry(id: number) {
    try {
      return this.deleteUseCase?.deleteCountry(id);
    } catch (error: any) {
      return error;
    }
  }
}
