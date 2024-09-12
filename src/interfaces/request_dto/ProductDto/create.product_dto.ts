import { OmitType } from '@nestjs/swagger';
import { NewProductWithListPriceDto, ProductDto } from '@src/core/shared/dto/Product/product_dto';

export class CreateProductRequestDto extends OmitType(ProductDto, ['code', 'created_at'] as const) { }

export class CreateProductWithListPriceRequestDto extends NewProductWithListPriceDto { }
