import { ApiProperty } from '@nestjs/swagger';
import { AppResponse } from '@src/infraestructure/responses/app.response';
import { ProductDto } from 'src/core/shared/dto/Product/product_dto';

export class ProductResponse extends AppResponse {
  @ApiProperty({
    type: ProductDto,
    nullable: true,
  })
  data?: ProductDto;
}

export class ProductsResponse extends AppResponse {
  @ApiProperty({
    type: [ProductDto],
    nullable: true,
  })
  data?: ProductDto[];
}
