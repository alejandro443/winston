import { WorkerService } from 'src/domain/services/WorkerService/WorkerService';

export class DeleteWorkerUseCase {
  constructor(private workerService?: WorkerService) {
    this.workerService = new WorkerService();
  }

  async deleteWorker(code: string) {
    try {
      const response = await this.workerService.deleteWorker(code);
      return { id: response.id };
    } catch (error) {
      return error;
    }
  }
}
