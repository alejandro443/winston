import { NewTypeWorkerDto } from "src/core/shared/dto/TypeWorker/type_worker_dto";
import { TypeWorkerRepository } from "src/domain/repositories/TypeWorkerRepository/TypeWorkerRepository";

export class TypeWorkerService {
  constructor(
    private repository?: TypeWorkerRepository
  ) { 
    this.repository = new TypeWorkerRepository()
  }

  async getOneTypeWorker(code: string) {
    try {
      return this.repository.findOne(code)
    } catch (error) {
      return error
    }
  }
  
  async getAllTypeWorker() {
    try {
      return this.repository.findAll()
    } catch (error) {
      return error
    }
  }
  
  async createTypeWorker(type_worker: NewTypeWorkerDto) {
    try {
      return this.repository.create(type_worker)
    } catch (error) {
      return error
    }
  }
  
  async updateTypeWorker(code: string, type_worker: NewTypeWorkerDto) {
    try {
      return this.repository.update(code, type_worker)
    } catch (error) {
      return error
    }
  }
  
  async deleteTypeWorker(code: string) {
    try {
      return this.repository.deleted(code)
    } catch (error) {
      return error
    }
  }
}