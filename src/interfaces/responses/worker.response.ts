import { ApiProperty } from '@nestjs/swagger';
import { WorkerDto } from '@src/core/shared/dto/Worker/worker_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class WorkerResponse extends AppResponse {
  @ApiProperty({
    type: WorkerDto,
    nullable: true,
  })
  data?: object;
}

export class WorkersResponse extends AppResponse {
  @ApiProperty({
    type: [WorkerDto],
    nullable: true,
  })
  data?: WorkerDto[];
}
