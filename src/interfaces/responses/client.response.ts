import { ApiProperty } from '@nestjs/swagger';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class ClientResponse extends AppResponse {
  @ApiProperty({
    type: Object,
    nullable: true,
  })
  data?: object;
}
