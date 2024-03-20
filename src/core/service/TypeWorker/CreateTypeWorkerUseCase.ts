import { TypeWorkerService } from 'src/domain/services/TypeWorkerService/TypeWorkerService';
import { NewTypeWorkerDto } from '@dto/TypeWorker/type_worker_dto';

export class CreateTypeWorkerUseCase {
  constructor(private type_workerService?: TypeWorkerService) {
    this.type_workerService = new TypeWorkerService();
  }

  async createTypeWorker(type_worker: NewTypeWorkerDto) {
    try {
      const response =
        await this.type_workerService.createTypeWorker(type_worker);
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
