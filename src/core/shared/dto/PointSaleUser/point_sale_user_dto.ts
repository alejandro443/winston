import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional } from 'class-validator';

export class PointSaleUserDto {
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
    description: 'Id del usuario',
    type: Number,
  })
  @IsNumber()
  user_id?: number;

  @ApiProperty({
    description: 'Id del punto de venta',
    type: Number,
  })
  @IsNumber()
  point_sale_id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado del punto de venta (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  status?: boolean;
}
export class DeletePointSaleUserDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OnePointSaleUserDto extends PartialType(PointSaleUserDto) { }
export class AllPointSaleUserDto extends PartialType(PointSaleUserDto) { }
export class NewPointSaleUserDto extends OmitType(PointSaleUserDto, ['id'] as const) { }
export class UpdatePointSaleUserDto extends OmitType(PointSaleUserDto, ['id'] as const) { }