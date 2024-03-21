import { ApiProperty } from '@nestjs/swagger';
import { ClientDto } from '@src/core/shared/dto/Client/client_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class ClientResponse extends AppResponse {
  @ApiProperty({
    type: ClientDto,
    nullable: true,
  })
  data?: object;
}

export class ClientsResponse extends AppResponse {
  @ApiProperty({
    type: [ClientDto],
    nullable: true,
  })
  data?: ClientDto[];
}