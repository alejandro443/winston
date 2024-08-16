import {
  NewTypeWorkerDto,
  UpdateTypeWorkerDto,
} from 'src/core/shared/dto/TypeWorker/type_worker_dto';
import { TypeWorker } from 'src/domain/entities/TypeWorker.entity';

export class TypeWorkerRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return TypeWorker.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return TypeWorker.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(type_worker: NewTypeWorkerDto) {
    try {
      return TypeWorker.create(type_worker);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: any, type_worker: UpdateTypeWorkerDto) {
    try {
      return TypeWorker.update(type_worker, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return TypeWorker.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
