import { CompanyWorkerApplicationError } from '@src/core/shared/error/CompanyWorkerApplicationError';
import { CompanyArea } from '@src/domain/entities/CompanyArea.entity';
import { CompanyPosition } from '@src/domain/entities/CompanyPosition.entity';
import { Person } from '@src/domain/entities/Person.entity';
import { CompanyWorker } from 'src/domain/entities/CompanyWorker.entity';

export class CompanyWorkerRepository {
  constructor() {}

  async findOne(id: any) {
    try {
      return CompanyWorker.findOne({ where: { id: id } });
    } catch (error: any) {
      throw new CompanyWorkerApplicationError(error);
    }
  }

  async findAll() {
    try {
      return CompanyWorker.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      throw new CompanyWorkerApplicationError(error);
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
      throw new CompanyWorkerApplicationError(error);
    }
  }

  async deleted(id: number) {
    try {
      return CompanyWorker.destroy({ where: { id: id } });
    } catch (error: any) {
      throw new CompanyWorkerApplicationError(error);
    }
  }

  async findAllByCompany(filter: Object) {
    try {
      const data: any = await CompanyWorker.findAll({
        include: [
          { model: Person, required: false, foreignKey: 'person_id' },
          { model: CompanyPosition, required: false, foreignKey: 'company_position_id' },
          { model: CompanyArea, required: false, foreignKey: 'company_area_id' },
        ],
        where: { ...filter, deleted_at: null }
      });

      return data;
    } catch (error: any) {
      throw new CompanyWorkerApplicationError(error);
    }
  }
}
