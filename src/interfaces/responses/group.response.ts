import { ApiProperty } from '@nestjs/swagger';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class GroupResponse extends AppResponse {
  @ApiProperty({ 
    type: {},
    nullable: true 
  })
  data?: {};
}
