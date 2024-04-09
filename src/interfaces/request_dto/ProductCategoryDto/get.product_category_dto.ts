import { ProductCategoryDto } from '@src/core/shared/dto/ProductCategory/product_category_dto';

export type GetProductCategoryRequestDto = Pick<ProductCategoryDto, 'id'>;
