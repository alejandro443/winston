import {
  NewWorkerDto,
  UpdateWorkerDto,
} from 'src/core/shared/dto/Worker/worker_dto';
import { Worker } from 'src/domain/entities/Worker.entity';

export class WorkerRepository {
  constructor() {}

  async findOne(code: string) {
    try {
      return Worker.findOne({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return Worker.findAll({ where: { deleted_at: '' } });
    } catch (error: any) {
      return error;
    }
  }

  async create(worker: any) {
    try {
      return Worker.create(worker);
    } catch (error: any) {
      return error;
    }
  }

  async update(code: any, worker: UpdateWorkerDto) {
    try {
      return Worker.update(worker, { where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(code: string) {
    try {
      return Worker.destroy({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }
}
