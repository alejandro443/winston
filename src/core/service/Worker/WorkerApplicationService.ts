import { WorkerApplication } from 'src/core/application/Worker/WorkerApplication';
import {
  NewWorkerDto,
  UpdateWorkerDto,
} from 'src/core/shared/dto/Worker/Worker_dto';
import { GetOneWorkerUseCase } from './GetOneWorkerUseCase';
import { GetAllWorkerUseCase } from './GetAllWorkerUseCase';
import { CreateWorkerUseCase } from './CreateWorkerUseCase';
import { UpdateWorkerUseCase } from './UpdateWorkerUseCase';
import { DeleteWorkerUseCase } from './DeleteWorkerUseCase';

export class WorkerApplicationService implements WorkerApplication {
  constructor(
    private getOneUseCase?: GetOneWorkerUseCase,
    private getAllUseCase?: GetAllWorkerUseCase,
    private createUseCase?: CreateWorkerUseCase,
    private updateUseCase?: UpdateWorkerUseCase,
    private deleteUseCase?: DeleteWorkerUseCase,
  ) {
    this.getOneUseCase = new GetOneWorkerUseCase();
    this.getAllUseCase = new GetAllWorkerUseCase();
    this.createUseCase = new CreateWorkerUseCase();
    this.updateUseCase = new UpdateWorkerUseCase();
    this.deleteUseCase = new DeleteWorkerUseCase();
  }

  async getAllWorker() {
    try {
      return this.getAllUseCase.getAllWorker();
    } catch (error) {
      return error;
    }
  }

  async getOneWorker(worker_code: string) {
    try {
      return this.getOneUseCase.getOneWorker(worker_code);
    } catch (error) {
      return error;
    }
  }

  async createWorker(worker: NewWorkerDto) {
    try {
      return this.createUseCase.createWorker(worker);
    } catch (error) {
      return error;
    }
  }

  async updateWorker(code: string, worker: UpdateWorkerDto) {
    try {
      return this.updateUseCase.updateWorker(code, worker);
    } catch (error) {
      return error;
    }
  }

  async deleteWorker(code: string) {
    try {
      return this.deleteUseCase.deleteWorker(code);
    } catch (error) {
      return error;
    }
  }
}
