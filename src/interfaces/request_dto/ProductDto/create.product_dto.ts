import { ProductDto } from '@src/core/shared/dto/Product/product_dto';

export class CreateProductRequestDto
  extends ProductDto
  implements Omit<ProductDto, 'id, created_at, updated_at, deleted_at'> {}
