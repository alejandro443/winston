import { NewTypeWorkerDto, UpdateTypeWorkerDto } from "src/core/shared/dto/TypeWorker/type_worker_dto";
import { TypeWorker } from "src/domain/entities/TypeWorker.entity";

export class TypeWorkerRepository {
  constructor() { }

  async findOne(code: string) {
    try {
      return TypeWorker.findOne({ where: { code: code } })
    } catch (error) {
      return error
    }
  }

  async findAll() {
    try {
      return TypeWorker.findAll({ where: { deleted_at: null } })
    } catch (error) {
      return error
    }
  }

  async create(type_worker: NewTypeWorkerDto) {
    try {
      return TypeWorker.create(type_worker)
    } catch (error) {
      return error
    }
  }

  async update(code: string, type_worker: UpdateTypeWorkerDto) {
    try {
      return TypeWorker.update(type_worker, { where: { code: code } })
    } catch (error) {
      return error
    }
  }

  async deleted(code: string) {
    try {
      return TypeWorker.destroy({ where: { code: code } })
    } catch (error) {
      return error
    }
  }
}