import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class ListPriceDto {
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
    description: 'Nombre de la lista de precios',
    type: String,
  })
  @IsString()
  name?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Descripcion de la lista de precios',
    type: String,
  })
  @IsString()
  description?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Moneda de la lista de precio',
    type: String,
  })
  @IsString()
  currency?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Simbolo de la moneda',
    type: String,
  })
  @IsString()
  symbol?: string;
  
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Porcentaje a aumentar en el precio original del producto. Nos ayudara al momento de registrar el precio de un producto, automaticamente, se registre el precio del producto aumentando el porcentaje del precio original del producto.',
    type: Number,
  })
  @IsNumber()
  increase_percentage?: number;
  
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Porcentaje a reducir en el precio original del producto. Nos ayudara al momento de registrar el precio de un producto, automaticamente, se registre el precio del producto reduciendo el porcentaje del precio original del producto.',
    type: Number,
  })
  @IsNumber()
  reduce_percentage?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Código de la lista de precios',
    type: String,
  })
  @IsString()
  code?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado de la lista de precios (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  status?: boolean;
}
export class DeleteListPriceDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneDto extends PartialType(ListPriceDto) { }
export class AllDto extends PartialType(ListPriceDto) { }
export class NewDto extends OmitType(ListPriceDto, ['id'] as const) { }
export class UpdateDto extends OmitType(ListPriceDto, ['id'] as const) { }