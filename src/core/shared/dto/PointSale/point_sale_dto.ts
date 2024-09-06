import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class PointSaleDto {
  @ApiProperty({
    description: 'Id del punto de venta',
    type: Number,
  })
  @ApiResponseProperty({
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre del punto de venta',
    type: String,
  })
  @IsString()
  name?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Descripcion del punto de venta',
    type: String,
  })
  @IsString()
  description?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Código del punto de venta',
    type: String,
  })
  @IsString()
  code?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado del punto de venta (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  status?: boolean;
}
export class DeletePointSaleDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OnePointSaleDto extends PartialType(PointSaleDto) { }
export class AllPointSaleDto extends PartialType(PointSaleDto) { }
export class NewPointSaleDto extends OmitType(PointSaleDto, ['id'] as const) { }
export class UpdatePointSaleDto extends OmitType(PointSaleDto, ['id'] as const) { }