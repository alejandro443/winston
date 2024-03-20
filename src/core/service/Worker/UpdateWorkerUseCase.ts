import { UpdateWorkerDto } from '@dto/Worker/worker_dto';
import { WorkerService } from 'src/domain/services/WorkerService/WorkerService';

export class UpdateWorkerUseCase {
  constructor(private clientService?: WorkerService) {
    this.clientService = new WorkerService();
  }

  async updateWorker(code: string, client: UpdateWorkerDto) {
    try {
      const response = await this.clientService.updateWorker(code, client);
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
