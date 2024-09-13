import { ApiProperty, PickType } from '@nestjs/swagger';
import { ProductCategoryDto } from '@src/core/shared/dto/ProductCategory/product_category_dto';
import { IsString } from 'class-validator';

export class GetProductCategoryRequestDto extends PickType(ProductCategoryDto, ['id'] as const) { }
export class SearchRequestDto { 
  @ApiProperty({
    description: 'Termino de busqueda.',
    type: String,
  })
  @IsString()
  declare searchTerm?: string;
}