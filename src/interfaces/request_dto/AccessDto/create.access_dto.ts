import { OmitType } from '@nestjs/mapped-types';
import { AccessDto } from 'src/core/shared/dto/Access/access_dto';

export class CreateAccessRequestDto extends
  OmitType(AccessDto, ['id', 'created_at'] as const) { }