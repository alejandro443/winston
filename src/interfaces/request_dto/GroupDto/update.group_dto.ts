import { OmitType } from '@nestjs/mapped-types';
import { GroupDto } from '@src/core/shared/dto/Group/group_dto';

export class UpdateGroupRequestDto extends
  OmitType(GroupDto, ['id', 'created_at'] as const) { }