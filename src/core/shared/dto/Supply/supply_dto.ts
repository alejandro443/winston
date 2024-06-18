import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
  OmitType,
  PartialType,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class SupplyDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id del tipo del suministro.',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre del tipo de suministro.',
    type: String,
  })
  @IsString()
  name?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Descripción del tipo de suministro.',
    type: String,
  })
  @IsString()
  description?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Código del tipo de suministro.',
    type: String,
  })
  @IsString()
  code?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Imagen del tipo de suministro.',
    type: String,
  })
  @IsString()
  image?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Se puede comprar.',
    type: Boolean,
    default: true,
  })
  @IsBoolean()
  to_sell?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Se puede vender.',
    type: Boolean,
    default: true,
  })
  @IsBoolean()
  to_buy?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Numero de Dias para alerta.',
    type: Number,
  })
  @IsNumber()
  alert_days?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado del tipo de suministro (Activo/Inactivo)',
    type: Boolean,
    default: true,
  })
  @IsBoolean()
  status?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Id del tipo de suministro.',
    type: Number,
  })
  @IsNumber()
  supply_type_id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Id de la marca del suministro.',
    type: Number,
  })
  @IsNumber()
  product_brand_id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Id de la categoria del suministro.',
    type: Number,
  })
  @IsNumber()
  product_category_id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Id de la unidad de medida del suministro.',
    type: Number,
  })
  @IsNumber()
  unit_measurement_id?: number;

  @ApiResponseProperty({
    type: Date,
  })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Fecha de creación',
    type: Date,
  })
  created_at?: Date;
}
export class DeleteSupplyDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneSupplyDto extends PartialType(SupplyDto) { }
export class AllSupplyDto extends PartialType(SupplyDto) { }
export class NewSupplyDto extends OmitType(SupplyDto, ['id'] as const) { }
export class UpdateSupplyDto extends OmitType(SupplyDto, ['id'] as const) { }