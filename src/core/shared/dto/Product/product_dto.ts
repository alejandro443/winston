import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';
import { IsFloat } from 'sequelize-typescript';

export class ProductDto {
  @ApiProperty({
    description: 'Id del producto',
    type: String,
  })
  @ApiResponseProperty({
    type: String,
  })
  @IsNumber()
  declare id?: number;

  @ApiProperty({
    description: 'Código del producto',
    type: String,
  })
  @IsString()
  declare code?: string;

  @ApiProperty({
    description: 'Nombre del producto',
    type: String,
  })
  @IsString()
  declare name?: string;

  @ApiProperty({
    description: 'Descripcion del producto',
    type: String,
  })
  @IsString()
  @IsOptional()
  declare description?: string;

  @ApiProperty({
    description: 'Nombre del producto',
    type: String,
  })
  @IsString()
  @IsOptional()
  declare image?: string;
  
  @ApiProperty({
    description: 'SKU del producto',
    type: String,
    example: 'Z1ABC5678912',
    uniqueItems: true,
  })
  @IsString()
  @IsOptional()
  declare sku?: string;
  
  @ApiProperty({
    description: 'UPC del producto',
    type: String,
    example: '123456789012',
    uniqueItems: true,
  })
  @IsString()
  @IsOptional()
  declare upc?: string;
  
  @ApiProperty({
    description: 'Ancho del producto',
    type: Number
  })
  @IsNumber()
  @IsOptional()
  declare weight?: number;
  
  @ApiProperty({
    description: 'Alto del producto',
    type: Number
  })
  @IsNumber()
  @IsOptional()
  declare height?: number;
 
  @ApiProperty({
    description: 'Profundidad del producto',
    type: Number
  })
  @IsNumber()
  @IsOptional()
  declare depth?: number;

  @ApiPropertyOptional({
    description: 'Estado del producto (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  declare status?: boolean;
  
  @ApiPropertyOptional({
    description: '¿Se puede comprar?',
    default: false,
    type: Boolean,
  })
  @IsBoolean()
  declare to_sell?: boolean;
  
  @ApiPropertyOptional({
    description: '¿Se puede vender?',
    default: false,
    type: Boolean,
  })
  @IsBoolean()
  declare to_buy?: boolean;

  @ApiProperty({
    description: 'Numero de dias para alertas.',
    type: Number
  })
  @IsNumber()
  @IsOptional()
  declare alert_days?: number;

  @ApiProperty({
    description: 'Id de la marca de producto.',
    type: Number
  })
  @IsNumber()
  @IsOptional()
  declare product_brand_id?: number;

  @ApiProperty({
    description: 'Id de la categoria de producto.',
    type: Number
  })
  @IsNumber()
  @IsOptional()
  declare product_category_id?: number;

  @ApiProperty({
    description: 'Id de la unidad de medida.',
    type: Number
  })
  @IsNumber()
  @IsOptional()
  declare unit_measurement_id?: number;

  @ApiProperty({
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
