import { WorkerService } from 'src/domain/services/WorkerService/WorkerService';

export class GetAllWorkerUseCase {
  constructor(private workerService?: WorkerService) {
    this.workerService = new WorkerService();
  }

  async getAllWorker() {
    try {
      const response: any = await this.workerService?.getAllWorker();

      return response.map((worker: any) => ({
        id: worker.id,
        code: worker.code,
        status: worker.status,
        user_id: worker.user_id,
        person_identification: worker.person_identification,
        type_worker_code: worker.type_worker_code,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
