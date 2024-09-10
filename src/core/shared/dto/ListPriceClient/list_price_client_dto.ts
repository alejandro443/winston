import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsDateString, IsNumber } from 'class-validator';

export class ListPriceClientDto {
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
    description: 'Id del cliente.',
    type: Number,
  })
  @IsNumber()
  client_id?: number;
  
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
  price_unit?: number;
  
  @ApiProperty({
    description: 'Precio por paquete.',
    type: Number,
  })
  @IsNumber()
  package_unit?: number;
  
}
export class DeleteListPriceClientDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneDto extends PartialType(ListPriceClientDto) { }
export class AllDto extends PartialType(ListPriceClientDto) { }
export class NewDto extends OmitType(ListPriceClientDto, ['id'] as const) { }
export class UpdateDto extends OmitType(ListPriceClientDto, ['id'] as const) { }