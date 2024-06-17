import { PickType } from '@nestjs/swagger';
import { UserDto } from '@src/core/shared/dto/User/user_dto';

export class GetUserRequestDto extends PickType(UserDto, ['code'] as const) { }