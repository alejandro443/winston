import { NewCompanyPositionDto } from 'src/core/shared/dto/CompanyPosition/company_position_dto';
import { CompanyPositionRepository } from 'src/domain/repositories/CompanyPositionRepository/CompanyPositionRepository';

export class CompanyPositionService {
  constructor(private repository?: CompanyPositionRepository) {
    this.repository = new CompanyPositionRepository();
  }

  async getOneCompanyPosition(code: string) {
    try {
      return this.repository?.findOne(code);
    } catch (error: any) {
      return error;
    }
  }

  async getAllCompanyPosition() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createCompanyPosition(company_position: NewCompanyPositionDto) {
    try {
      return this.repository?.create(company_position);
    } catch (error: any) {
      return error;
    }
  }

  async updateCompanyPosition(code: any, company_position: NewCompanyPositionDto) {
    try {
      return this.repository?.update(code, company_position);
    } catch (error: any) {
      return error;
    }
  }

  async deleteCompanyPosition(code: string) {
    try {
      return this.repository?.deleted(code);
    } catch (error: any) {
      return error;
    }
  }
}
