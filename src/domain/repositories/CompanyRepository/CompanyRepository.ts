import { ClientApplicationError } from '@src/core/shared/error/ClientApplicationError';
import {
  NewCompanyDto,
  UpdateCompanyDto,
} from 'src/core/shared/dto/Company/company_dto';
import { Company } from 'src/domain/entities/Company.entity';

export class CompanyRepository {
  constructor() {}

  async findOne(main_identification: string) {
    try {
      return await Company.findOne({
        where: { main_identification: main_identification },
      });
    } catch (error: any) {
      throw new ClientApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async findAll() {
    try {
      return await Company.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(company: NewCompanyDto | object) {
    try {
      var data_company:any = await Company.create(company);
      return data_company
    } catch (error: any) {
      throw new ClientApplicationError(error.errors[0].message, 'INTERNAL_SERVER_ERROR')
    }
  }

  async update(main_identification: string, company: UpdateCompanyDto | object) {
    try {
      return await Company.update(company, {
        where: { main_identification: main_identification },
      });
    } catch (error: any) {
      throw new ClientApplicationError(error.errors[0].message, 'INTERNAL_SERVER_ERROR')
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

  async updateFromClient(id: number, company: UpdateCompanyDto | object) {
    try {
      const data_update: any = await Company.update(company, { where: { id: id } });
      return data_update;
    } catch (error: any) {
      throw new ClientApplicationError(error.errors[0].message, 'INTERNAL_SERVER_ERROR')
    }
  }
}
