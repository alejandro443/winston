import { ApiProperty } from '@nestjs/swagger';
import { TypeWorkerDto } from '@src/core/shared/dto/TypeWorker/type_worker_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class TypeWorkerResponse extends AppResponse {
  @ApiProperty({
    type: TypeWorkerDto,
    nullable: true,
  })
  data?: object;
}
export class TypesWorkersResponse extends AppResponse {
  @ApiProperty({
    type: [TypeWorkerDto],
    nullable: true,
  })
  data?: TypeWorkerDto[];
}
