import { TypeWorkerService } from 'src/domain/services/TypeWorkerService/TypeWorkerService';

export class GetAllTypeWorkerUseCase {
  constructor(private type_workerService?: TypeWorkerService) {
    this.type_workerService = new TypeWorkerService();
  }

  async getAllTypeWorker() {
    try {
      const response: any = await this.type_workerService?.getAllTypeWorker();

      return response.map((type_worker: any) => ({
        id: type_worker.id,
        code: type_worker.code,
        name: type_worker.name,
        description: type_worker.description,
        status: type_worker.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
