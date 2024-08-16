import { TypeWorkerService } from 'src/domain/services/TypeWorkerService/TypeWorkerService';

export class GetOneTypeWorkerUseCase {
  constructor(private type_workerService?: TypeWorkerService) {
    this.type_workerService = new TypeWorkerService();
  }

  async getOneTypeWorker(id: number) {
    try {
      const response: any =
        await this.type_workerService?.getOneTypeWorker(id);
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
