import { WorkerService } from 'src/domain/services/WorkerService/WorkerService';
import { NewWorkerDto } from '@dto/Worker/worker_dto';

export class CreateWorkerUseCase {
  constructor(private workerService?: WorkerService) {
    this.workerService = new WorkerService();
  }

  async createWorker(worker: NewWorkerDto) {
    try {
      const response = await this.workerService.createWorker(worker);
      return {
        id: response.id,
        code: response.code,
        status: response.status,
        user_id: response.user_id,
        person_identification: response.person_identification,
        type_worker_code: response.type_worker_code,
      };
    } catch (error) {
      return error;
    }
  }
}
