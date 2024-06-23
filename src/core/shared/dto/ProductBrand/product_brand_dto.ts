import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class ProductBrandDto {
  @ApiProperty({
    description: 'Id de la categoria del producto',
    type: Number,
  })
  @ApiResponseProperty({
    type: Number,
  })
  @IsNumber()
  declare id?: number;

  @ApiProperty({
    description: 'Nombre de la categoria del producto',
    type: String,
  })
  @IsString()
  declare name?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Descripcion de la categoria del producto',
    type: String,
  })
  @IsString()
  declare description?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Código de la categoria del producto',
    type: String,
  })
  @IsString()
  declare code?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Nombre de la categoria del producto',
    type: String,
  })
  @IsString()
  declare image?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado de la categoria del producto (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  declare status?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Fecha de creación',
    type: Date,
  })
  @IsDateString()
  declare created_at?: Date;
}
export class DeleteProductBrandDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  declare deleted_at?: Date;
}

export class OneProductBrandDto extends PartialType(ProductBrandDto) { }
export class AllProductBrandDto extends PartialType(ProductBrandDto) { }
export class NewProductBrandDto extends OmitType(ProductBrandDto, ['id', 'created_at'] as const) { }
export class UpdateProductBrandDto extends OmitType(ProductBrandDto, ['id', 'created_at'] as const) { }
