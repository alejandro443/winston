import { ApiProperty } from '@nestjs/swagger';
import { PointSaleDto } from '@src/core/shared/dto/PointSale/point_sale_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class PointSaleResponse extends AppResponse {
  @ApiProperty({
    type: PointSaleDto,
    nullable: true,
  })
  data?: object;
}

export class PointSalesResponse extends AppResponse {
  @ApiProperty({
    type: [PointSaleDto],
    nullable: true,
  })
  data?: PointSaleDto[];
}
