import { ApiProperty } from '@nestjs/swagger';
import { UserRolDto } from '@src/core/shared/dto/UserRol/user_rol_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class UserRolResponse extends AppResponse {
  @ApiProperty({
    type: UserRolDto,
    nullable: true,
  })
  data?: object;
}

export class UserRolsResponse extends AppResponse {
  @ApiProperty({
    type: [UserRolDto],
    nullable: true,
  })
  data?: UserRolDto[];
}
