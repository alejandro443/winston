import { OmitType } from '@nestjs/mapped-types';
import { UserDto } from '@src/core/shared/dto/User/user_dto';

export class CreateUserRequestDto extends
  OmitType(UserDto, ['id', 'created_at'] as const) { }