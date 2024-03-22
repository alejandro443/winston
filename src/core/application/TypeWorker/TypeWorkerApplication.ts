import {
  AllTypeWorkerDto,
  NewTypeWorkerDto,
  OneTypeWorkerDto,
  UpdateTypeWorkerDto,
} from 'src/core/shared/dto/TypeWorker/type_worker_dto';

export interface TypeWorkerApplication {
  getAllTypeWorker(): Promise<Array<AllTypeWorkerDto>>;
  getOneTypeWorker(code: string): Promise<OneTypeWorkerDto>;
  createTypeWorker(type_worker: NewTypeWorkerDto): Promise<OneTypeWorkerDto>;
  updateTypeWorker(
    code: string,
    type_worker: UpdateTypeWorkerDto,
  ): Promise<OneTypeWorkerDto>;
  deleteTypeWorker(code: string);
}
