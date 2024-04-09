import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class ProductCategoryDto {
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

  @ApiProperty({
    description: 'Para poder reconocer si el registro es definido de base o no.',
    type: Boolean,
    default: false,
  })
  @IsBoolean()
  declare is_base?: boolean;

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

export interface OneProductCategoryDto extends ProductCategoryDto {}
export interface AllProductCategoryDto extends ProductCategoryDto {}
export interface NewProductCategoryDto extends Omit<ProductCategoryDto, 'id'> {}
export interface UpdateProductCategoryDto
  extends Omit<ProductCategoryDto, 'id'> {}