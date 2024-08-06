import { OperationService } from 'src/domain/services/OperationService/OperationService';

export class GetAllOperationUseCase {
  constructor(private operationService?: OperationService) {
    this.operationService = new OperationService();
  }

  async getAllOperation() {
    try {
      const response: any = await this.operationService?.getAllOperation();

      return response.map((operation: any) => ({
        id: operation.id,
        code: operation.code,
        name: operation.name,
        description: operation.description,
        status: operation.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
