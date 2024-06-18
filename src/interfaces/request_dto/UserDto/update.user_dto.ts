import { OmitType } from '@nestjs/swagger';
import { UserDto } from '@src/core/shared/dto/User/user_dto';

export class UpdateUserRequestDto extends
  OmitType(UserDto, ['code'] as const) { }