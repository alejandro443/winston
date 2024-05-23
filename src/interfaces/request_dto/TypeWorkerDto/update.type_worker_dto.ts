import { OmitType } from '@nestjs/mapped-types';
import { TypeWorkerDto } from '@src/core/shared/dto/TypeWorker/type_worker_dto';

export class UpdateTypeWorkerRequestDto extends
  OmitType(TypeWorkerDto, ['id', 'created_at'] as const) { }