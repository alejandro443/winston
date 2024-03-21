import { ApiProperty } from '@nestjs/swagger';
import { AppResponse } from '@src/infraestructure/responses/app.response';
import { UserDto } from '@src/core/shared/dto/User/user_dto';

class UserResponseDto implements Omit<UserDto, 'password'>{};

export class UserResponse extends AppResponse {
  @ApiProperty({
    type: UserResponseDto,
    nullable: true,
  })
  data?: object;
}

export class UsersResponse extends AppResponse {
  @ApiProperty({
    type: [UserResponseDto],
    nullable: true,
  })
  data?: UserDto[];
}
