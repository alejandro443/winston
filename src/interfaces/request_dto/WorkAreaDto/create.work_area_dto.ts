import { OmitType } from '@nestjs/swagger';
import { WorkAreaDto } from '@src/core/shared/dto/WorkArea/work_area_dto';

export class CreateWorkAreaRequestDto extends
  OmitType(WorkAreaDto, ['id', 'created_at'] as const) { }