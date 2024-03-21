import { ApiProperty } from '@nestjs/swagger';
import { UserAccessDto } from '@src/core/shared/dto/UserAccess/user_access_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class UserAccessResponse extends AppResponse {
  @ApiProperty({
    type: UserAccessDto,
    nullable: true,
  })
  data?: object;
}

export class UserAccessesResponse extends AppResponse {
  @ApiProperty({
    type: [UserAccessDto],
    nullable: true,
  })
  data?: UserAccessDto[];
}
