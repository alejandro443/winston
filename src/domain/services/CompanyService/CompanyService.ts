import { NewCompanyDto } from 'src/core/shared/dto/Company/company_dto';
import { CompanyRepository } from 'src/domain/repositories/CompanyRepository/CompanyRepository';

export class CompanyService {
  constructor(private repository?: CompanyRepository) {
    this.repository = new CompanyRepository();
  }

  async getOneCompany(identification: string) {
    try {
      return this.repository?.findOne(identification);
    } catch (error: any) {
      return error;
    }
  }

  async getAllCompany() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createCompany(company: NewCompanyDto) {
    try {
      return this.repository?.create(company);
    } catch (error: any) {
      return error;
    }
  }

  async updateCompany(identification: string, company: NewCompanyDto) {
    try {
      return this.repository?.update(identification, company);
    } catch (error: any) {
      return error;
    }
  }

  async deleteCompany(identification: string) {
    try {
      return this.repository?.deleted(identification);
    } catch (error: any) {
      return error;
    }
  }
}
