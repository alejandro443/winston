import { ApiProperty } from '@nestjs/swagger';

export class SalesReceivableDto {
  @ApiProperty({
    description: 'Id de la venta.',
    type: Number,
  })
  sale_id?: number;

  @ApiProperty({
    description: 'Si la venta esta pagada por completa o no.',
    type: Number,
  })
  sale_paid?: number;
  
  @ApiProperty({
    description: 'Fecha de la venta.',
    type: Date,
  })
  sale_date?: Date;

  @ApiProperty({
    description: 'Nombre del cliente.',
    type: String,
  })
  client_name?: String;
  
  @ApiProperty({
    description: 'Numero de telefono del cliente.',
    type: String,
  })
  client_phone?: String;
  
  @ApiProperty({
    description: 'Tipo de documento a la cual esta asociado la venta.',
    type: String,
  })
  type_document?: String;


  @ApiProperty({
    description: 'Serie del comprobante de la venta.',
    type: String,
  })
  document_serie?: String;
 
  @ApiProperty({
    description: 'Vendedor asignado del cliente.',
    type: String,
  })
  asssigned_seller?: String;
  
  @ApiProperty({
    description: 'Fecha del ultimo pago.',
    type: String,
  })
  payment_last_date?: String;

  @ApiProperty({
    description: 'Total de la venta.',
    type: Number,
  })
  total_sale?: Number;

  @ApiProperty({
    description: 'Total del monto pagado.',
    type: Number,
  })
  balance_paid?: Number;

  @ApiProperty({
    description: 'Total de la deuda.',
    type: Number,
  })
  outstanding_balance?: Number;

  @ApiProperty({
    description: 'Numero de cuotas.',
    type: Number,
  })
  number_quotas?: Number;
}
