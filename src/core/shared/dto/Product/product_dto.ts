import { OmitType, PartialType, PickType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsBoolean, IsDateString, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { extend } from 'joi';
import { ListPriceProductDto } from '../ListPriceProduct/list_price_product_dto';
import { ProductBrandDto } from '../ProductBrand/product_brand_dto';

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

export class ProductListPrice {
  @ApiProperty({
    description: 'Id de la lista de precio.',
    type: Number,
  })
  @IsNumber()
  declare list_price_id?: number;

  @ApiProperty({
    description: 'Precio por unidad.',
    type: Number,
    format: 'float',
    example: 7.99
  })
  @IsNumber({ allowInfinity: false, allowNaN: false }, { message: 'El precio por unidad debe ser un número válido.' })
  declare unit_price?: number;
  
  @ApiProperty({
    description: 'Precio por paquete.',
    type: Number,
    format: 'float',
    example: 7.50
  })
  @IsNumber({ allowInfinity: false, allowNaN: false }, { message: 'El precio por paquete debe ser un número válido.' })
  declare package_price?: number;
}

export class NewProductWithListPriceDto extends OmitType(ProductDto, ['id', 'created_at'] as const) {
  @ApiProperty({
    description: 'Listas de precios.',
    type: [ProductListPrice],
  })
  @IsArray()
  @IsObject({})
  list_prices?: ProductListPrice[];
}


class ProductListPriceReferenceId extends ProductListPrice {
  @ApiProperty({
    description: 'Id de referencia con la cual se actualizara el precio del producto en lista de precio.',
    type: Number,
  })
  @ValidateNested()
  @IsNumber()
  declare reference_update_id?: number;
}

export class ProductWithListPricesDto extends OmitType(ProductDto, ['created_at'] as const) {
  @ApiProperty({
    description: 'Listas de precios.',
    type: [ProductListPriceReferenceId],
  })
  @IsArray()
  @IsObject({})
  @Type(() => ProductListPriceReferenceId)
  list_prices?: ProductListPriceReferenceId[];
}