import { OmitType } from '@nestjs/swagger';
import { NewUserWithPersonDto, UserDto } from '@src/core/shared/dto/User/user_dto';

export class CreateUserRequestDto extends
  OmitType(UserDto, ['code', 'created_at'] as const) { }

export class CreateUserWithRolesRequestDto extends NewUserWithPersonDto { }