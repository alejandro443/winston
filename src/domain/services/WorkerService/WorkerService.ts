import { NewWorkerDto } from '@src/core/shared/dto/Worker/worker_dto';
import { WorkerRepository } from 'src/domain/repositories/WorkerRepository/WorkerRepository';

export class WorkerService {
  constructor(private repository?: WorkerRepository) {
    this.repository = new WorkerRepository();
  }

  async getOneWorker(code: string) {
    try {
      return this.repository.findOne(code);
    } catch (error) {
      return error;
    }
  }

  async getAllWorker() {
    try {
      return this.repository.findAll();
    } catch (error) {
      return error;
    }
  }

  async createWorker(worker: NewWorkerDto) {
    try {
      return this.repository.create(worker);
    } catch (error) {
      return error;
    }
  }

  async updateWorker(code: string, worker: NewWorkerDto) {
    try {
      return this.repository.update(code, worker);
    } catch (error) {
      return error;
    }
  }

  async deleteWorker(code: string) {
    try {
      return this.repository.deleted(code);
    } catch (error) {
      return error;
    }
  }
}
