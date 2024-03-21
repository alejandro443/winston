import { ApiProperty } from '@nestjs/swagger';
import { AccessRolDto } from '@src/core/shared/dto/AccessRol/access_rol_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class AccessRolResponse extends AppResponse {
  @ApiProperty({
    type: AccessRolDto,
    nullable: true,
  })
  data?: object;
}

export class AccessRolesResponse extends AppResponse {
  @ApiProperty({
    type: [AccessRolDto],
    nullable: true,
  })
  data?: AccessRolDto[];
}
