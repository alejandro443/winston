import { ApiProperty } from '@nestjs/swagger';
import { ListPriceDto } from '@src/core/shared/dto/ListPrice/list_price_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class ListPriceResponse extends AppResponse {
  @ApiProperty({
    type: ListPriceDto,
    nullable: true,
  })
  data?: object;
}

export class ListPricesResponse extends AppResponse {
  @ApiProperty({
    type: [ListPriceDto],
    nullable: true,
  })
  data?: ListPriceDto[];
}
