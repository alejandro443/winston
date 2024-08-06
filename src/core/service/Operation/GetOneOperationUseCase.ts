import { OperationService } from 'src/domain/services/OperationService/OperationService';

export class GetOneOperationUseCase {
  constructor(private operationService?: OperationService) {
    this.operationService = new OperationService();
  }

  async getOneOperation(id: number) {
    try {
      const response: any =
        await this.operationService?.getOneOperation(id);
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
