import { ApiProperty } from '@nestjs/swagger';
import { UserDto } from '@src/core/shared/dto/User/user_dto';

export class CreateUserRequestDto
  extends UserDto
  implements Omit<UserDto, 'id, created_at'> {}