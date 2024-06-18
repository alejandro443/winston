import { OmitType } from '@nestjs/swagger';
import { UserDto } from '@src/core/shared/dto/User/user_dto';

export class CreateUserRequestDto extends
  OmitType(UserDto, ['code', 'created_at'] as const) { }