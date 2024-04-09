import { ProductBrandDto } from '@src/core/shared/dto/ProductBrand/product_brand_dto';

export class CreateProductBrandRequestDto
  extends ProductBrandDto
  implements Omit<ProductBrandDto, 'id, created_at, updated_at, deleted_at'> {}
