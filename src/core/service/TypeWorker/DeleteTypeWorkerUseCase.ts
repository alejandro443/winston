import { TypeWorkerService } from 'src/domain/services/TypeWorkerService/TypeWorkerService';

export class DeleteTypeWorkerUseCase {
  constructor(private type_workerService?: TypeWorkerService) {
    this.type_workerService = new TypeWorkerService();
  }

  async deleteTypeWorker(code: string) {
    try {
      const response = await this.type_workerService.deleteTypeWorker(code);
      return { id: response.id };
    } catch (error) {
      return error;
    }
  }
}
