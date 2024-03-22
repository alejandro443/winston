import { WorkerDto } from '@src/core/shared/dto/Worker/worker_dto';

export class CreateWorkerRequestDto
  extends WorkerDto
  implements Omit<WorkerDto, 'id, created_at'> {}
