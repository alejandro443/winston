import { OperationService } from 'src/domain/services/OperationService/OperationService';

export class DeleteOperationUseCase {
  constructor(private operationService?: OperationService) {
    this.operationService = new OperationService();
  }

  async deleteOperation(id: number) {
    try {
      const response: any =
        await this.operationService?.deleteOperation(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
