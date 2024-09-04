import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ProductDto {
  @ApiProperty({
    description: 'Id del producto.',
    type: Number,
  })
  @ApiResponseProperty({
    type: Number,
  })
  @IsNumber()
  declare id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Código del producto',
    type: String,
  })
  @IsString()
  declare code?: string;

  @ApiProperty({
    description: 'Nombre del producto',
    type: String
  })
  @IsString()
  declare name?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Descripcion del producto',
    type: String,
  })
  @IsString()
  declare description?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Nombre del producto',
    type: String,
  })
  @IsString()
  declare image?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'SKU del producto',
    type: String,
    example: 'Z1ABC5678912',
    uniqueItems: true,
  })
  @IsString()
  declare sku?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'UPC del producto',
    type: String,
    example: '123456789012',
    uniqueItems: true,
  })
  @IsString()
  declare upc?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Ancho del producto',
    type: Number
  })
  @IsNumber()
  declare weight?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Alto del producto',
    type: Number
  })
  @IsNumber()
  declare height?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Profundidad del producto',
    type: Number
  })
  @IsNumber()
  declare depth?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado del producto (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  declare status?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: '¿Se puede comprar?',
    default: false,
    type: Boolean,
  })
  @IsBoolean()
  declare to_sell?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: '¿Se puede vender?',
    default: false,
    type: Boolean,
  })
  @IsBoolean()
  declare to_buy?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Numero de dias para alertas.',
    type: Number
  })
  @IsNumber()
  declare alert_days?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Id de la marca de producto.',
    type: Number
  })
  @IsNumber()
  declare product_brand_id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Id de la categoria de producto.',
    type: Number
  })
  @IsNumber()
  declare product_category_id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Id de la unidad de medida.',
    type: Number
  })
  @IsNumber()
  declare unit_measurement_id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Fecha de creación.',
    type: Date,
  })
  @IsDateString()
  declare created_at?: Date;
}
export class DeleteProductDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  declare deleted_at?: Date;
}

export class OneProductDto extends PartialType(ProductDto) { }
export class AllProductDto extends PartialType(ProductDto) { }
export class NewProductDto extends OmitType(ProductDto, ['id', 'created_at'] as const) { }
export class UpdateProductDto extends OmitType(ProductDto, ['id', 'created_at'] as const) { }
