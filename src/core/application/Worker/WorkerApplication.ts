import {
  AllWorkerDto,
  NewWorkerDto,
  OneWorkerDto,
  UpdateWorkerDto,
} from 'src/core/shared/dto/Worker/worker_dto';

export interface WorkerApplication {
  getAllWorker(): Promise<Array<AllWorkerDto>>;
  getOneWorker(code: any): Promise<OneWorkerDto>;
  createWorker(client: NewWorkerDto): Promise<OneWorkerDto>;
  updateWorker(code: any, client: UpdateWorkerDto): Promise<OneWorkerDto>;
  deleteWorker(code: any): any;
}
