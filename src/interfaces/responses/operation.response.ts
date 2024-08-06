import { ApiProperty } from '@nestjs/swagger';
import { OperationDto } from '@src/core/shared/dto/Operation/operation_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class OperationResponse extends AppResponse {
  @ApiProperty({
    type: OperationDto,
    nullable: true,
  })
  data?: object;
}

export class OperationsResponse extends AppResponse {
  @ApiProperty({
    type: [OperationDto],
    nullable: true,
  })
  data?: OperationDto[];
}
