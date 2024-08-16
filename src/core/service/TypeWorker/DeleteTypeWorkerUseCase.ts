import { TypeWorkerService } from 'src/domain/services/TypeWorkerService/TypeWorkerService';

export class DeleteTypeWorkerUseCase {
  constructor(private type_workerService?: TypeWorkerService) {
    this.type_workerService = new TypeWorkerService();
  }

  async deleteTypeWorker(id: number) {
    try {
      const response: any =
        await this.type_workerService?.deleteTypeWorker(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
