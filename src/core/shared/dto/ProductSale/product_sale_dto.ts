import {
  ApiProperty
} from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class ProductSaleDto {
  @ApiProperty({
    description: 'Id del producto.',
    type: Number,
  })
  @IsNumber()
  id?: number;
  
  @ApiProperty({
    description: 'Nombre del producto.',
    type: String,
  })
  @IsString()
  name?: string;
  
  @ApiProperty({
    description: 'Cantidad del producto.',
    type: Number,
  })
  @IsNumber()
  amount?: number;
  
  @ApiProperty({
    description: 'Precio actual del producto.',
    type: Number,
  })
  @IsNumber()
  price?: number;
  
  @ApiProperty({
    description: 'Subtotal del producto.',
    type: Number,
  })
  @IsNumber()
  subtotal?: number;
  
  @ApiProperty({
    description: 'Descuento del producto.',
    type: Number,
  })
  @IsNumber()
  discount?: number;
  
  @ApiProperty({
    description: 'Total (Cantidad x Precio).',
    type: Number,
  })
  @IsNumber()
  total?: number;

}