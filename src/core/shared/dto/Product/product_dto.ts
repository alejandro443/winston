import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

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
  declare description?: string;

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
  declare image?: string;

  @ApiPropertyOptional({
    description: 'Estado del producto (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  declare status?: boolean;
}
export class DeleteProductDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  declare deleted_at?: Date;
}

export interface OneProductDto extends ProductDto {}
export interface AllProductDto extends ProductDto {}
export interface NewProductDto extends Omit<ProductDto, 'id'> {}
export interface UpdateProductDto extends Omit<ProductDto, 'id'> {}
