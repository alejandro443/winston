import { ApiProperty } from '@nestjs/swagger';
import { AppResponse } from '@src/infraestructure/responses/app.response';
import { LoginResponseDto } from '../request_dto/AuthDto/login.auth_dto';

export class LoginResponse extends AppResponse {
  @ApiProperty({
    type: LoginResponseDto,
    nullable: true,
  })
  data?: object;
}
