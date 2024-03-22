import { TypeWorkerDto } from '@src/core/shared/dto/TypeWorker/type_worker_dto';

export type UpdateTypeWorkerRequestDto = Omit<TypeWorkerDto, 'id, created_at'>;
