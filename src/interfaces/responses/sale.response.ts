import { ApiProperty } from '@nestjs/swagger';
import { SalesReceivableDto } from '@src/core/shared/dto/Sale/sales_receivable_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';
import { SaleDto } from 'src/core/shared/dto/Sale/sale_dto';

export class SaleResponse extends AppResponse {
  @ApiProperty({
    type: SaleDto,
    nullable: true,
  })
  data?: SaleDto;
}

export class SalesResponse extends AppResponse {
  @ApiProperty({
    type: [SaleDto],
    nullable: true,
  })
  data?: SaleDto[];
}

export class SalesReceivableResponse extends AppResponse {
  @ApiProperty({
    type: [SalesReceivableDto],
    nullable: true,
  })
  data?: SalesReceivableDto[];
}
