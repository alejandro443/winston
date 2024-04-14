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
}
export class DeleteProductBrandDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  declare deleted_at?: Date;
}

export interface OneProductBrandDto extends ProductBrandDto {}
export interface AllProductBrandDto extends ProductBrandDto {}
export interface NewProductBrandDto extends Omit<ProductBrandDto, 'id'> {}
export interface UpdateProductBrandDto extends Omit<ProductBrandDto, 'id'> {}
