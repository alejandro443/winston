import { ApiProperty } from '@nestjs/swagger';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class TypeClientResponse extends AppResponse {
  @ApiProperty({ 
    type: {},
    nullable: true 
  })
  data?: {};
}
