import { PickType } from '@nestjs/swagger';
import { ProductDto } from '@src/core/shared/dto/Product/product_dto';

export class GetProductRequestDto extends PickType(ProductDto, ['id'] as const) { }