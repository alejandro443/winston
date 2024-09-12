import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsDateString, IsNumber } from 'class-validator';

export class ListPriceProductDto {
  @ApiProperty({
    description: 'Id de la lista de precios',
    type: Number,
  })
  @ApiResponseProperty({
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Id del producto.',
    type: Number,
  })
  @IsNumber()
  product_id?: number;
  
  @ApiProperty({
    description: 'Id de la lista de precio.',
    type: Number,
  })
  @IsNumber()
  list_price_id?: number;
  
  @ApiProperty({
    description: 'Precio unitario.',
    type: Number,
  })
  @IsNumber()
  unit_price?: number;
  
  @ApiProperty({
    description: 'Precio por paquete.',
    type: Number,
  })
  @IsNumber()
  package_price?: number;
  
}
export class DeleteListPriceProductDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneDto extends PartialType(ListPriceProductDto) { }
export class AllDto extends PartialType(ListPriceProductDto) { }
export class NewDto extends OmitType(ListPriceProductDto, ['id'] as const) { }
export class UpdateDto extends OmitType(ListPriceProductDto, ['id'] as const) { }