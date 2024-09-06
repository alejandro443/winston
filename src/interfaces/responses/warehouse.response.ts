import { ApiProperty } from '@nestjs/swagger';
import { WarehouseDto } from '@src/core/shared/dto/Warehouse/warehouse_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class WarehouseResponse extends AppResponse {
  @ApiProperty({
    type: WarehouseDto,
    nullable: true,
  })
  data?: object;
}

export class WarehousesResponse extends AppResponse {
  @ApiProperty({
    type: [WarehouseDto],
    nullable: true,
  })
  data?: WarehouseDto[];
}
