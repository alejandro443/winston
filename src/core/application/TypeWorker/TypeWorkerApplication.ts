import {
  AllTypeWorkerDto,
  NewTypeWorkerDto,
  OneTypeWorkerDto,
  UpdateTypeWorkerDto,
} from 'src/core/shared/dto/TypeWorker/type_worker_dto';

export interface TypeWorkerApplication {
  getAllTypeWorker(): Promise<Array<AllTypeWorkerDto>>;
  getOneTypeWorker(id: any): Promise<OneTypeWorkerDto>;
  createTypeWorker(type_worker: NewTypeWorkerDto): Promise<OneTypeWorkerDto>;
  updateTypeWorker(
    id: any,
    type_worker: UpdateTypeWorkerDto,
  ): Promise<OneTypeWorkerDto>;
  deleteTypeWorker(id: any): any;
}
