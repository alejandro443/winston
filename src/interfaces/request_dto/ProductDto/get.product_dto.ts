import { ApiProperty, PickType } from '@nestjs/swagger';
import { ProductDto } from '@src/core/shared/dto/Product/product_dto';
import { IsNumber } from 'class-validator';

export class GetProductRequestDto extends PickType(ProductDto, ['id'] as const) { }
export class GetProductByPriceListRequestDto {
  @ApiProperty({
    description: 'Id de la categoria de los productos a mostrar.',
    type: Number,
  })
  @IsNumber()
  category_id?: number;

  @ApiProperty({
    description: 'Id de la lista de precio.',
    type: Number,
  })
  @IsNumber()
  list_price_id?: number;
}
