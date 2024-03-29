import {
  NewCompanyDto,
  UpdateCompanyDto,
} from 'src/core/shared/dto/Company/company_dto';
import { Company } from 'src/domain/entities/Company.entity';

export class CompanyRepository {
  constructor() {}

  async findOne(main_identification: string) {
    try {
      return Company.findOne({
        where: { main_identification: main_identification },
      });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return Company.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(company: NewCompanyDto | object) {
    try {
      return Company.create(company);
    } catch (error: any) {
      return error;
    }
  }

  async update(main_identification: string, company: UpdateCompanyDto) {
    try {
      return Company.update(company, {
        where: { main_identification: main_identification },
      });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(main_identification: string) {
    try {
      return Company.destroy({
        where: { main_identification: main_identification },
      });
    } catch (error: any) {
      return error;
    }
  }
}
