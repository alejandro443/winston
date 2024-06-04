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

  async create(CompanyWorker: any) {
    try {
      return CompanyWorker.create(CompanyWorker);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: any, CompanyWorker: any) {
    try {
      return CompanyWorker.update(CompanyWorker, { where: { id: id } });
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
