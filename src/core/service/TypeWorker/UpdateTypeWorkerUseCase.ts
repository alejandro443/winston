import { UpdateTypeWorkerDto } from '@dto/TypeWorker/type_worker_dto';
import { TypeWorkerService } from 'src/domain/services/TypeWorkerService/TypeWorkerService';

export class UpdateTypeWorkerUseCase {
  constructor(private type_workerService?: TypeWorkerService) {
    this.type_workerService = new TypeWorkerService();
  }

  async updateTypeWorker(code: string, type_worker: UpdateTypeWorkerDto) {
    try {
      const response = await this.type_workerService.updateTypeWorker(
        code,
        type_worker,
      );
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        status: response.status,
      };
    } catch (error) {
      return error;
    }
  }
}
