import { OperationApplication } from 'src/core/application/Operation/OperationApplication';
import {
  NewOperationDto,
  UpdateOperationDto,
} from 'src/core/shared/dto/Operation/operation_dto';
import { GetOneOperationUseCase } from './GetOneOperationUseCase';
import { GetAllOperationUseCase } from './GetAllOperationUseCase';
import { CreateOperationUseCase } from './CreateOperationUseCase';
import { UpdateOperationUseCase } from './UpdateOperationUseCase';
import { DeleteOperationUseCase } from './DeleteOperationUseCase';

export class OperationApplicationService implements OperationApplication {
  constructor(
    private getOneUseCase?: GetOneOperationUseCase,
    private getAllUseCase?: GetAllOperationUseCase,
    private createUseCase?: CreateOperationUseCase,
    private updateUseCase?: UpdateOperationUseCase,
    private deleteUseCase?: DeleteOperationUseCase,
  ) {
    this.getOneUseCase = new GetOneOperationUseCase();
    this.getAllUseCase = new GetAllOperationUseCase();
    this.createUseCase = new CreateOperationUseCase();
    this.updateUseCase = new UpdateOperationUseCase();
    this.deleteUseCase = new DeleteOperationUseCase();
  }

  async getAllOperation() {
    try {
      return this.getAllUseCase?.getAllOperation();
    } catch (error: any) {
      return error;
    }
  }

  async getOneOperation(operation_id: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOneOperation(operation_id);
    } catch (error: any) {
      return error;
    }
  }

  async createOperation(operation: NewOperationDto): Promise<any> {
    try {
      return this.createUseCase?.createOperation(operation);
    } catch (error: any) {
      return error;
    }
  }

  async updateOperation(
    id: any,
    operation: UpdateOperationDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updateOperation(id, operation);
    } catch (error: any) {
      return error;
    }
  }

  async deleteOperation(id: number) {
    try {
      return this.deleteUseCase?.deleteOperation(id);
    } catch (error: any) {
      return error;
    }
  }
}
