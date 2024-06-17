import { PickType } from '@nestjs/swagger';
import { ProductBrandDto } from '@src/core/shared/dto/ProductBrand/product_brand_dto';

export class GetProductBrandRequestDto extends PickType(ProductBrandDto, ['id'] as const) { }
