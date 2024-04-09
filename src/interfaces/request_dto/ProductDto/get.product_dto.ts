import { ProductDto } from '@src/core/shared/dto/Product/product_dto';

export type GetProductRequestDto = Pick<ProductDto, 'id'>;
