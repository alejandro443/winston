import { ApiProperty } from '@nestjs/swagger';
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
