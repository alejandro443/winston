import { ProductCategoryDto } from '@src/core/shared/dto/ProductCategory/product_category_dto';

export class CreateProductCategoryRequestDto
  extends ProductCategoryDto
  implements Omit<ProductCategoryDto, 'id, created_at, updated_at, deleted_at'> {}
