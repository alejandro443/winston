import { TypeWorkerService } from 'src/domain/services/TypeWorkerService/TypeWorkerService';

export class GetOneTypeWorkerUseCase {
  constructor(private type_workerService?: TypeWorkerService) {
    this.type_workerService = new TypeWorkerService();
  }

  async getOneTypeWorker(code: string) {
    try {
      const response: any = await this.type_workerService?.getOneTypeWorker(code);
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
