import { UpdateOperationDto } from 'src/core/shared/dto/Operation/operation_dto';
import { OperationService } from 'src/domain/services/OperationService/OperationService';

export class UpdateOperationUseCase {
  constructor(private operationService?: OperationService) {
    this.operationService = new OperationService();
  }

  async updateOperation(id: number, operation: UpdateOperationDto) {
    try {
      const response: any = await this.operationService?.updateOperation(
        id,
        operation,
      );
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
