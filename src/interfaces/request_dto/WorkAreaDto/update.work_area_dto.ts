import { OmitType } from '@nestjs/swagger';
import { WorkAreaDto } from '@src/core/shared/dto/WorkArea/work_area_dto';

export class UpdateWorkAreaRequestDto extends
  OmitType(WorkAreaDto, ['code', 'created_at'] as const) { }