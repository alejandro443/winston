import { ApiProperty } from '@nestjs/swagger';
import { AppResponse } from '@src/infraestructure/responses/app.response';
import { UserDto } from '@src/core/shared/dto/User/user_dto';

export class UserResponse extends AppResponse {
  @ApiProperty({
    type: UserDto,
    nullable: true,
  })
  data?: object;
}

export class UsersResponse extends AppResponse {
  @ApiProperty({
    type: [UserDto],
    nullable: true,
  })
  data?: UserDto[];
}
