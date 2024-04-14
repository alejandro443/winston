import {
  NewCountryDto,
  UpdateCountryDto,
} from 'src/core/shared/dto/Country/country_dto';
import { Country } from 'src/domain/entities/Country.entity';

export class CountryRepository {
  constructor() {}

  async findAll() {
    try {
      return Country.findAll({ where: { deleted_at: null } });
    } catch (error) {
      return error;
    }
  }

  async findOne(id: number) {
    try {
      return Country.findOne({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }

  async create(country: NewCountryDto) {
    try {
      return Country.create(country);
    } catch (error) {
      return error;
    }
  }

  async update(id: number, country: UpdateCountryDto) {
    try {
      return Country.update(country, { where: { id: id } });
    } catch (error) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return Country.destroy({ where: { id: id } });
    } catch (error) {
      return error;
    }
  }
}
