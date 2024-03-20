import { ApiProperty } from '@nestjs/swagger';
import { TypeClientDto } from '@src/core/shared/dto/TypeClient/type_client_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class TypeClientResponse extends AppResponse {
  @ApiProperty({
    type: TypeClientDto,
    nullable: true,
  })
  data?: object;
}

export class TypesClientsResponse extends AppResponse {
  @ApiProperty({
    type: [TypeClientDto],
    nullable: true,
  })
  data?: TypeClientDto[];
}
