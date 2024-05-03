import { OmitType } from '@nestjs/mapped-types';
import { WorkerDto } from '@src/core/shared/dto/Worker/worker_dto';

export class CreateWorkerRequestDto extends
  OmitType(WorkerDto, ['id', 'created_at'] as const) { }