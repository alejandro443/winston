import { OmitType, PartialType } from '@nestjs/mapped-types';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class ProductBrandDto {
  @ApiProperty({
    description: 'Id de la categoria del producto',
    type: String,
  })
  @ApiResponseProperty({
    type: String,
  })
  @IsNumber()
  declare id?: number;

  @ApiProperty({
    description: 'Nombre de la categoria del producto',
    type: String,
  })
  @IsString()
  declare name?: string;

  @ApiProperty({
    description: 'Descripcion de la categoria del producto',
    type: String,
  })
  @IsString()
  declare description?: string;

  @ApiProperty({
    description: 'Código de la categoria del producto',
    type: String,
  })
  @IsString()
  declare code?: string;

  @ApiProperty({
    description: 'Nombre de la categoria del producto',
    type: String,
  })
  @IsString()
  declare image?: string;

  @ApiPropertyOptional({
    description: 'Estado de la categoria del producto (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  declare status?: boolean;

  @ApiProperty({
    description: 'Fecha de eliminación',
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
