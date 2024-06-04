import { CompanyWorkerApplicationError } from '@src/core/shared/error/CompanyWorkerApplicationError';
import { CompanyWorker } from 'src/domain/entities/CompanyWorker.entity';

export class CompanyWorkerRepository {
  constructor() {}

  async findOne(id: any) {
    try {
      return CompanyWorker.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return CompanyWorker.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(company_worker: any) {
    try {
      var company_new: any = await CompanyWorker.create(company_worker);
      return company_new;
    } catch (error: any) {
      console.log(error)
      throw new CompanyWorkerApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async update(id: any, company_worker: any) {
    try {
      return CompanyWorker.update(company_worker, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return CompanyWorker.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
