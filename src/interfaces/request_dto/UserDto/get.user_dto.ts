import { PickType } from '@nestjs/mapped-types';
import { UserDto } from '@src/core/shared/dto/User/user_dto';

export class GetUserRequestDto extends PickType(UserDto, ['code'] as const) { }