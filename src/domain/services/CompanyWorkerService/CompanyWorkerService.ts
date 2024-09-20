import { CompanyWorkerApplicationError } from '@src/core/shared/error/CompanyWorkerApplicationError';
import { CompanyWorkerRepository } from 'src/domain/repositories/CompanyWorkerRepository/CompanyWorkerRepository';

export class CompanyWorkerService {
  constructor(private repository?: CompanyWorkerRepository) {
    this.repository = new CompanyWorkerRepository();
  }

  async getOneCompanyWorker(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      throw new CompanyWorkerApplicationError(error);
    }
  }

  async getAllCompanyWorker() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      throw new CompanyWorkerApplicationError(error);
    }
  }

  async createCompanyWorker(company_worker: any) {
    try {
      var company_worker_new: any = await this.repository?.create(company_worker);
      return company_worker_new;
    } catch (error: any) {
      throw new CompanyWorkerApplicationError(error)
    }
  }

  async updateCompanyWorker(id: any, company_worker: any) {
    try {
      return this.repository?.update(id, company_worker);
    } catch (error: any) {
      throw new CompanyWorkerApplicationError(error);
    }
  }

  async deleteCompanyWorker(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      throw new CompanyWorkerApplicationError(error);
    }
  }

  async getAllCompanyWorkerByCompany(company_id: number) {
    try {
      const data: any = await this.repository?.findAllByCompany({company_id: company_id});
      
      const data_company_worker: any = data.map((company_worker: any)=> {
        const data_transform: any = company_worker.toJSON();

        return {
          company_worker_id: data_transform.id,
          company_position_id: data_transform.company_position_id,
          company_position_name: data_transform?.companyPosition?.name,
          company_area_id: data_transform.company_area_id,
          company_area_name: data_transform?.companyArea?.name,
          receptionist: data_transform.person
        }
      })

      return data_company_worker;
    } catch (error: any) {
      throw new CompanyWorkerApplicationError(error);
    }
  }
}
