import { OperationService } from 'src/domain/services/OperationService/OperationService';
import { NewOperationDto } from 'src/core/shared/dto/Operation/operation_dto';

export class CreateOperationUseCase {
  constructor(private operationService?: OperationService) {
    this.operationService = new OperationService();
  }

  async createOperation(operation: NewOperationDto) {
    try {
      const response: any =
        await this.operationService?.createOperation(operation);
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
