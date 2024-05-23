import { OmitType } from '@nestjs/mapped-types';
import { ProductDto } from '@src/core/shared/dto/Product/product_dto';

export class CreateProductRequestDto extends
  OmitType(ProductDto, ['id', 'created_at'] as const) { }