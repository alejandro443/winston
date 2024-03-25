import { WorkerService } from 'src/domain/services/WorkerService/WorkerService';

export class GetOneWorkerUseCase {
  constructor(private workerService?: WorkerService) {
    this.workerService = new WorkerService();
  }

  async getOneWorker(code: string) {
    try {
      const response: any = await this.workerService?.getOneWorker(code);
      return {
        id: response.id,
        code: response.code,
        status: response.status,
        user_id: response.user_id,
        person_identification: response.person_identification,
        type_worker_code: response.type_worker_code,
      };
    } catch (error: any) {
      return error;
    }
  }
}
