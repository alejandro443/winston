import { PickType } from '@nestjs/swagger';
import { WorkAreaDto } from '@src/core/shared/dto/WorkArea/work_area_dto';

export class GetWorkAreaRequestDto extends PickType(WorkAreaDto, ['id'] as const) { }