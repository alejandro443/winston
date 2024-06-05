import {
  NewCompanyPositionDto,
  UpdateCompanyPositionDto,
} from 'src/core/shared/dto/CompanyPosition/company_position_dto';
import { CompanyPosition } from 'src/domain/entities/CompanyPosition.entity';

export class CompanyPositionRepository {
  constructor() {}

  async findOne(code: string) {
    try {
      return CompanyPosition.findOne({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return CompanyPosition.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(company_position: NewCompanyPositionDto) {
    try {
      return CompanyPosition.create(company_position);
    } catch (error: any) {
      return error;
    }
  }

  async update(code: any, company_position: UpdateCompanyPositionDto) {
    try {
      return CompanyPosition.update(company_position, { where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(code: string) {
    try {
      return CompanyPosition.destroy({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }
}
