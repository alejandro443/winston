import { OmitType } from '@nestjs/mapped-types';
import { UserDto } from '@src/core/shared/dto/User/user_dto';

export class UpdateUserRequestDto extends
  OmitType(UserDto, ['id'] as const) { }