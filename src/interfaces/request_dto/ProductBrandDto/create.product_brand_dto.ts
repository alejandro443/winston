import { OmitType } from '@nestjs/mapped-types';
import { ProductBrandDto } from '@src/core/shared/dto/ProductBrand/product_brand_dto';

export class CreateProductBrandRequestDto extends
  OmitType(ProductBrandDto, ['id', 'created_at'] as const) { }