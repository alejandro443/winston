import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class ProductCategoryDto {
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
    description:
      'Para poder reconocer si el registro es definido de base o no.',
    type: Boolean,
    default: false,
  })
  @IsBoolean()
  declare is_base?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado de la categoria del producto (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  declare status?: boolean;
}
export class DeleteProductCategoryDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  declare deleted_at?: Date;
}

export class OneProductCategoryDto extends PartialType(ProductCategoryDto) { }
export class AllProductCategoryDto extends PartialType(ProductCategoryDto) { }
export class NewProductCategoryDto extends OmitType(ProductCategoryDto, ['id'] as const) { }
export class UpdateProductCategoryDto extends OmitType(ProductCategoryDto, ['id'] as const) { }