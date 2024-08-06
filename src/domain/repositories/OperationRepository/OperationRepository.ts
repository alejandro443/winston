import {
  NewOperationDto,
  UpdateOperationDto,
} from 'src/core/shared/dto/Operation/operation_dto';
import { Operation } from 'src/domain/entities/Operation.entity';

export class OperationRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return Operation.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return Operation.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(operation: NewOperationDto) {
    try {
      return Operation.create(operation);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: any, operation: UpdateOperationDto) {
    try {
      return Operation.update(operation, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return Operation.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
