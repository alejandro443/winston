import { ApiProperty } from '@nestjs/swagger';
import { AppResponse } from '@src/infraestructure/responses/app.response';
import { GetUserResponseRequestDto } from '../request_dto/UserDto/get.user_dto';

export class UserResponse extends AppResponse {
  @ApiProperty({ 
    type: GetUserResponseRequestDto, 
    nullable: true 
  })
  data?: {};
}

export class UsersResponse extends AppResponse {
  @ApiProperty({ 
    type: [GetUserResponseRequestDto], 
    nullable: true 
  })
  data?: GetUserResponseRequestDto[];
}
