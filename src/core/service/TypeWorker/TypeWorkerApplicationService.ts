import { TypeWorkerApplication } from 'src/core/application/TypeWorker/TypeWorkerApplication';
import {
  NewTypeWorkerDto,
  UpdateTypeWorkerDto,
} from 'src/core/shared/dto/TypeWorker/type_worker_dto';
import { GetOneTypeWorkerUseCase } from './GetOneTypeWorkerUseCase';
import { GetAllTypeWorkerUseCase } from './GetAllTypeWorkerUseCase';
import { CreateTypeWorkerUseCase } from './CreateTypeWorkerUseCase';
import { UpdateTypeWorkerUseCase } from './UpdateTypeWorkerUseCase';
import { DeleteTypeWorkerUseCase } from './DeleteTypeWorkerUseCase';

export class TypeWorkerApplicationService implements TypeWorkerApplication {
  constructor(
    private getOneUseCase?: GetOneTypeWorkerUseCase,
    private getAllUseCase?: GetAllTypeWorkerUseCase,
    private createUseCase?: CreateTypeWorkerUseCase,
    private updateUseCase?: UpdateTypeWorkerUseCase,
    private deleteUseCase?: DeleteTypeWorkerUseCase,
  ) {
    this.getOneUseCase = new GetOneTypeWorkerUseCase();
    this.getAllUseCase = new GetAllTypeWorkerUseCase();
    this.createUseCase = new CreateTypeWorkerUseCase();
    this.updateUseCase = new UpdateTypeWorkerUseCase();
    this.deleteUseCase = new DeleteTypeWorkerUseCase();
  }

  async getAllTypeWorker() {
    try {
      return this.getAllUseCase.getAllTypeWorker();
    } catch (error) {
      return error;
    }
  }

  async getOneTypeWorker(type_worker_code: string) {
    try {
      return this.getOneUseCase.getOneTypeWorker(type_worker_code);
    } catch (error) {
      return error;
    }
  }

  async createTypeWorker(type_worker: NewTypeWorkerDto) {
    try {
      return this.createUseCase.createTypeWorker(type_worker);
    } catch (error) {
      return error;
    }
  }

  async updateTypeWorker(code: string, type_worker: UpdateTypeWorkerDto) {
    try {
      return this.updateUseCase.updateTypeWorker(code, type_worker);
    } catch (error) {
      return error;
    }
  }

  async deleteTypeWorker(code: string) {
    try {
      return this.deleteUseCase.deleteTypeWorker(code);
    } catch (error) {
      return error;
    }
  }
}
