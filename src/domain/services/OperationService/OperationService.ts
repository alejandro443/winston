import { NewOperationDto } from 'src/core/shared/dto/Operation/operation_dto';
import { OperationRepository } from 'src/domain/repositories/OperationRepository/OperationRepository';

export class OperationService {
  constructor(private repository?: OperationRepository) {
    this.repository = new OperationRepository();
  }

  async getOneOperation(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      return error;
    }
  }

  async getAllOperation() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createOperation(operation: NewOperationDto) {
    try {
      return this.repository?.create(operation);
    } catch (error: any) {
      return error;
    }
  }

  async updateOperation(id: any, operation: NewOperationDto) {
    try {
      return this.repository?.update(id, operation);
    } catch (error: any) {
      return error;
    }
  }

  async deleteOperation(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      return error;
    }
  }
}
