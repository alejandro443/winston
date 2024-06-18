import { OmitType } from '@nestjs/swagger';
import { ProductDto } from '@src/core/shared/dto/Product/product_dto';

export class CreateProductRequestDto extends OmitType(ProductDto, ['code', 'created_at'] as const) { }