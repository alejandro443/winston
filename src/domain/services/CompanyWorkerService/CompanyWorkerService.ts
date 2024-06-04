import { CompanyWorkerRepository } from 'src/domain/repositories/CompanyWorkerRepository/CompanyWorkerRepository';

export class CompanyWorkerService {
  constructor(private repository?: CompanyWorkerRepository) {
    this.repository = new CompanyWorkerRepository();
  }

  async getOneCompanyWorker(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      return error;
    }
  }

  async getAllCompanyWorker() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createCompanyWorker(company_worker: any) {
    try {
      return this.repository?.create(company_worker);
    } catch (error: any) {
      return error;
    }
  }

  async updateCompanyWorker(id: any, company_worker: any) {
    try {
      return this.repository?.update(id, company_worker);
    } catch (error: any) {
      return error;
    }
  }

  async deleteCompanyWorker(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      return error;
    }
  }
}
