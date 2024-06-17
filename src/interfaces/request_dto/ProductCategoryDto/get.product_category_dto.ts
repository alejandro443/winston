import { PickType } from '@nestjs/swagger';
import { ProductCategoryDto } from '@src/core/shared/dto/ProductCategory/product_category_dto';

export class GetProductCategoryRequestDto extends PickType(ProductCategoryDto, ['id'] as const) { }