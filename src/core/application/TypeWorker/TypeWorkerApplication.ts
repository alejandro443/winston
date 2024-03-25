import {
  AllTypeWorkerDto,
  NewTypeWorkerDto,
  OneTypeWorkerDto,
  UpdateTypeWorkerDto,
} from 'src/core/shared/dto/TypeWorker/type_worker_dto';

export interface TypeWorkerApplication {
  getAllTypeWorker(): Promise<Array<AllTypeWorkerDto>>;
  getOneTypeWorker(code: any): Promise<OneTypeWorkerDto>;
  createTypeWorker(type_worker: NewTypeWorkerDto): Promise<OneTypeWorkerDto>;
  updateTypeWorker(
    code: any,
    type_worker: UpdateTypeWorkerDto,
  ): Promise<OneTypeWorkerDto>;
  deleteTypeWorker(code: any): any;
}
