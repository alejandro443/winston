import { 
  ApiProperty
} from '@nestjs/swagger';
import {
  IsDate,
  IsNumber,
  IsString 
} from 'class-validator';

export class ElectronicReceiptsDto {
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
    description: 'Numero de identificacion del cliente',
    type: String,
  })
  @IsString()
  declare client_main_identification;

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
    type: Date,
  })
  @IsDate()
  declare sale_date;

  @ApiProperty({
    description: 'Fecha del envio a sunat de la venta.',
    type: Date,
  })
  @IsDate()
  declare issuance_date;
  
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
    description: 'Total de la venta.',
    type: Number,
  })
  @IsNumber()
  declare total_sale;
}
