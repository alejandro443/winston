import { OmitType } from '@nestjs/mapped-types';
import { AccessDto } from 'src/core/shared/dto/Access/access_dto';

export class UpdateAccessRequestDto extends
  OmitType(AccessDto, ['id'] as const) { }