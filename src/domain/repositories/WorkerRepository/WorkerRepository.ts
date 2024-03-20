import {
  NewWorkerDto,
  UpdateWorkerDto,
} from '@dto/Worker/worker_dto';
import { Worker } from 'src/domain/entities/Worker.entity';

export class WorkerRepository {
  constructor() {}

  async findOne(code: string) {
    try {
      return Worker.findOne({ where: { code: code } });
    } catch (error) {
      return error;
    }
  }

  async findAll() {
    try {
      return Worker.findAll({ where: { deleted_at: null } });
    } catch (error) {
      return error;
    }
  }

  async create(worker: NewWorkerDto) {
    try {
      return Worker.create(worker);
    } catch (error) {
      return error;
    }
  }

  async update(code: string, worker: UpdateWorkerDto) {
    try {
      return Worker.update(worker, { where: { code: code } });
    } catch (error) {
      return error;
    }
  }

  async deleted(code: string) {
    try {
      return Worker.destroy({ where: { code: code } });
    } catch (error) {
      return error;
    }
  }
}
