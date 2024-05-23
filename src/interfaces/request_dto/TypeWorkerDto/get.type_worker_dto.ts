import { PickType } from '@nestjs/mapped-types';
import { TypeWorkerDto } from '@src/core/shared/dto/TypeWorker/type_worker_dto';

export class GetTypeWorkerRequestDto extends PickType(TypeWorkerDto, ['code'] as const) { }