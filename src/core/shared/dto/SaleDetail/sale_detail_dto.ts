import { 
  ApiProperty, 
  ApiPropertyOptional, 
  ApiResponseProperty, 
  OmitType, 
  PartialType
} from '@nestjs/swagger';
import { 
  IsNumber, 
  IsOptional, 
  IsDateString, 
  IsString 
} from 'class-validator';

export class SaleDetailDto {
  @ApiProperty({
    description: 'Id de la venta.',
    type: Number,
  })
  @ApiResponseProperty({
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Id de la venta.',
    type: Number,
  })
  @IsNumber()
  sale_id?: number;

  @ApiProperty({
    description: 'Id del producto.',
    type: Number,
  })
  @IsNumber()
  product_id?: number;
  
  @ApiProperty({
    description: 'Cantidad del producto.',
    type: Number,
  })
  @IsNumber()
  amount?: number;
  
  @ApiProperty({
    description: 'Nombre del producto.',
    type: String,
  })
  @IsString()
  product_name?: string;
  
  @ApiProperty({
    description: 'Precio del producto.',
    type: Number,
  })
  @IsString()
  product_price?: number;
  
  @ApiProperty({
    description: 'Subtotal del producto.',
    type: Number,
  })
  @IsString()
  product_subtotal?: number;
  
  @ApiProperty({
    description: 'Descuento del producto.',
    type: Number,
  })
  @IsString()
  product_discount?: number;
  
  @ApiProperty({
    description: 'Total del producto. (Cantidad x Precio)',
    type: Number,
  })
  @IsString()
  product_total?: number;

  @ApiPropertyOptional({
    description: 'Fecha de creación del registro.',
    type: Date,
  })
  @IsOptional()
  @IsDateString()
  created_at?: Date;

  @ApiPropertyOptional({
    description: 'Fecha de actualización del registro.',
    type: Date,
  })
  @IsOptional()
  @IsDateString()
  updated_at?: Date;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Fecha de eliminación (borrado lógico).',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class DeleteSaleDetailDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneSaleDetailDto extends PartialType(SaleDetailDto) { }
export class AllSaleDetailDto extends PartialType(SaleDetailDto) { }
export class NewSaleDetailDto extends OmitType(SaleDetailDto, ['id'] as const) { }
export class UpdateSaleDetailDto extends OmitType(SaleDetailDto, ['id'] as const) { }