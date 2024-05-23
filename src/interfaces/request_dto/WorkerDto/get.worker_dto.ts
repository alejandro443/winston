import { PickType } from '@nestjs/mapped-types';
import { WorkerDto } from '@src/core/shared/dto/Worker/worker_dto';

export class GetWorkerRequestDto extends PickType(WorkerDto, ['code'] as const) { }