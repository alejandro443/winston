import { PickType } from '@nestjs/swagger';
import { WorkerDto } from '@src/core/shared/dto/Worker/worker_dto';

export class GetWorkerRequestDto extends PickType(WorkerDto, ['code'] as const) { }