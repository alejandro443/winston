import { ApiProperty } from '@nestjs/swagger';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class WorkerResponse extends AppResponse {
  @ApiProperty({
    type: Object,
    nullable: true,
  })
  data?: object;
}
