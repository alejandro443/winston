import { ApiProperty } from '@nestjs/swagger';
import { RolDto } from '@src/core/shared/dto/Rol/rol_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class RolResponse extends AppResponse {
  @ApiProperty({
    type: RolDto,
    nullable: true,
  })
  data?: object;
}

export class RolesResponse extends AppResponse {
  @ApiProperty({
    type: [RolDto],
    nullable: true,
  })
  data?: RolDto[];
}
