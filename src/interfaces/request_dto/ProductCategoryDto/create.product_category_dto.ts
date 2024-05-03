import { OmitType } from '@nestjs/mapped-types';
import { ProductCategoryDto } from '@src/core/shared/dto/ProductCategory/product_category_dto';

export class CreateProductCategoryRequestDto extends
  OmitType(ProductCategoryDto, ['id'] as const) { }