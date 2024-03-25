import { NewTypeWorkerDto } from 'src/core/shared/dto/TypeWorker/type_worker_dto';
import { TypeWorkerRepository } from 'src/domain/repositories/TypeWorkerRepository/TypeWorkerRepository';

export class TypeWorkerService {
  constructor(private repository?: TypeWorkerRepository) {
    this.repository = new TypeWorkerRepository();
  }

  async getOneTypeWorker(code: string) {
    try {
      return this.repository?.findOne(code);
    } catch (error: any) {
      return error;
    }
  }

  async getAllTypeWorker() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createTypeWorker(type_worker: NewTypeWorkerDto) {
    try {
      return this.repository?.create(type_worker);
    } catch (error: any) {
      return error;
    }
  }

  async updateTypeWorker(code: any, type_worker: NewTypeWorkerDto) {
    try {
      return this.repository?.update(code, type_worker);
    } catch (error: any) {
      return error;
    }
  }

  async deleteTypeWorker(code: string) {
    try {
      return this.repository?.deleted(code);
    } catch (error: any) {
      return error;
    }
  }
}
