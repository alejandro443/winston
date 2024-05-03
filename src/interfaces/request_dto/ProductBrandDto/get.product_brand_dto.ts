import { PickType } from '@nestjs/mapped-types';
import { ProductBrandDto } from '@src/core/shared/dto/ProductBrand/product_brand_dto';

export class GetProductBrandRequestDto extends PickType(ProductBrandDto, ['id'] as const) { }
