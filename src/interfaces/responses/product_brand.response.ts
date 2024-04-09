import { ApiProperty } from '@nestjs/swagger';
import { AppResponse } from '@src/infraestructure/responses/app.response';
import { ProductBrandDto } from 'src/core/shared/dto/ProductBrand/product_brand_dto';

export class ProductBrandResponse extends AppResponse {
  @ApiProperty({
    type: ProductBrandDto,
    nullable: true,
  })
  data?: ProductBrandDto;
}

export class ProductCategoriesResponse extends AppResponse {
  @ApiProperty({
    type: [ProductBrandDto],
    nullable: true,
  })
  data?: ProductBrandDto[];
}
