import { TypeWorkerDto } from '@src/core/shared/dto/TypeWorker/type_worker_dto';

export class CreateTypeWorkerRequestDto
  extends TypeWorkerDto
  implements Omit<TypeWorkerDto, 'id, created_at'> {}
