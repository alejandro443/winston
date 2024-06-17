import { OmitType } from '@nestjs/swagger';
import { ProductBrandDto } from '@src/core/shared/dto/ProductBrand/product_brand_dto';

export class CreateProductBrandRequestDto extends
  OmitType(ProductBrandDto, ['id', 'created_at'] as const) { }