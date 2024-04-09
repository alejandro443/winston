import { ApiProperty } from '@nestjs/swagger';
import { AppResponse } from '@src/infraestructure/responses/app.response';
import { ProductCategoryDto } from 'src/core/shared/dto/ProductCategory/product_category_dto';

export class ProductCategoryResponse extends AppResponse {
  @ApiProperty({
    type: ProductCategoryDto,
    nullable: true,
  })
  data?: ProductCategoryDto;
}

export class ProductCategoriesResponse extends AppResponse {
  @ApiProperty({
    type: [ProductCategoryDto],
    nullable: true,
  })
  data?: ProductCategoryDto[];
}
