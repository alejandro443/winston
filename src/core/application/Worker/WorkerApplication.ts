import {
  AllWorkerDto,
  NewWorkerDto,
  OneWorkerDto,
  UpdateWorkerDto,
} from '@dto/Worker/worker_dto';

export interface WorkerApplication {
  getAllWorker(): Promise<Array<AllWorkerDto>>;
  getOneWorker(code: string): Promise<OneWorkerDto>;
  createWorker(client: NewWorkerDto): Promise<OneWorkerDto>;
  updateWorker(code: string, client: UpdateWorkerDto): Promise<OneWorkerDto>;
  deleteWorker(code: string);
}
