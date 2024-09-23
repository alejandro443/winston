import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsArray } from 'class-validator';

export class ProductsDetailsDto {
  @ApiProperty({
    description: 'Cantidad de los productos.',
    type: Number,
  })
  @IsNumber()
  declare amount;
  
  @ApiProperty({
    description: 'Precio del producto.',
    type: Number,
  })
  @IsNumber()
  declare product_price;
  
  @ApiProperty({
    description: 'Subtotal de la venta.',
    type: Number,
  })
  @IsNumber()
  declare product_subtotal;
  
  @ApiProperty({
    description: 'Descuenta del producto en la venta.',
    type: Number,
  })
  @IsNumber()
  declare product_discount;
  
  @ApiProperty({
    description: 'Total de la venta.',
    type: Number,
  })
  @IsNumber()
  declare product_total;
  
  @ApiProperty({
    description: 'Nombre del producto.',
    type: String,
  })
  @IsString()
  declare product_name;
}

export class SaleDetailsDto {
  @ApiProperty({
    description: 'Tipo de cliente: company|person',
    type: String,
  })
  @IsString()
  declare type_entity;

  @ApiProperty({
    description: 'Nombre del cliente',
    type: String,
  })
  @IsString()
  declare client_name;

  @ApiProperty({
    description: 'Numero de telefono del cliente',
    type: String,
  })
  @IsString()
  declare client_main_phone;

  @ApiProperty({
    description: 'Tipo de documento de la venta.',
    type: String,
  })
  @IsString()
  declare type_document;

  @ApiProperty({
    description: 'Numero de voucher.',
    type: String,
  })
  @IsString()
  declare voucher_number;

  @ApiProperty({
    description: 'Estado de envio a sunat.',
    type: String,
  })
  @IsString()
  declare submission_status;

  @ApiProperty({
    description: 'Moneda que fue hecha la venta.',
    type: String,
  })
  @IsString()
  declare currency;

  @ApiProperty({
    description: 'Fecha de la venta.',
    type: String,
  })
  @IsString()
  declare sale_date;
  
  @ApiProperty({
    description: 'Vendedor que hizo venta.',
    type: String,
  })
  @IsString()
  declare sold_by;

  @ApiProperty({
    description: 'Vendedor asignado al cliente de la venta.',
    type: String,
  })
  @IsString()
  declare seller_assigned;
  
  @ApiProperty({
    description: 'Lista de productos de la venta.',
    type: [ProductsDetailsDto],
  })
  @IsArray()
  declare products;
}



