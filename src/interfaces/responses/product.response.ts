import { ApiProperty } from '@nestjs/swagger';
import { ProductsWithPricesDto } from '@src/core/shared/dto/Product/products_with_prices_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';
import { ProductDto, ProductWithListPricesDto } from 'src/core/shared/dto/Product/product_dto';

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

export class ProductWithListPricesResponse extends AppResponse {
  @ApiProperty({
    type: ProductWithListPricesDto,
    nullable: true,
  })
  data?: ProductWithListPricesDto;
}

export class ProductsWithPricesResponse extends AppResponse {
  @ApiProperty({
    type: [ProductsWithPricesDto],
    nullable: true,
  })
  data?: ProductsWithPricesDto[];
}
