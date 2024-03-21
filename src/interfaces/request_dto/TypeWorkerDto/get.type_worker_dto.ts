import { TypeWorkerDto } from '@src/core/shared/dto/TypeWorker/type_worker_dto';

export type GetTypeWorkerRequestDto = Pick<TypeWorkerDto, 'code'>;
