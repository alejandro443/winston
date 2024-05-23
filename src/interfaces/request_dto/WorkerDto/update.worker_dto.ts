import { OmitType } from '@nestjs/mapped-types';
import { WorkerDto } from '@src/core/shared/dto/Worker/worker_dto';

export class UpdateWorkerRequestDto extends
  OmitType(WorkerDto, ['id'] as const) { }