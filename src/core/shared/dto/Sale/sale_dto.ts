import { ApiProperty, ApiPropertyOptional, ApiResponseProperty, OmitType, PartialType } from '@nestjs/swagger';
import { OrderTypes } from '../../../../infraestructure/shared/enums/OrderTypes';
import { IsString, IsNumber, IsOptional, IsDateString, IsEnum, IsNotEmpty, IsArray, ArrayNotEmpty, ValidateNested, IsObject } from 'class-validator';
import { Type } from 'class-transformer';
import { ProductSaleDto } from '../ProductSale/product_sale_dto';
import { SalesPaymentDto } from '../SalesPayment/sales_payment_dto';
import { PaymentScheduleDto } from '../PaymentSchedule/payment_schedule_dto';

export class SaleDto {
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
    description: 'Id del cliente asociado.',
    type: Number,
  })
  @IsNumber()
  client_id?: number;

  @ApiProperty({
    description: 'Id del que realiza la venta.',
    type: Number,
  })
  @IsNumber()
  sold_by?: number;

  @ApiProperty({
    description: 'Id del que vendedor asignado al cliente.',
    type: Number,
  })
  @IsNumber()
  seller_asigned?: number;

  @ApiProperty({
    description: 'Id del punto de venta.',
    type: Number,
  })
  @IsNumber()
  point_sale_id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Id del documento emitido.',
    type: Number,
  })
  @IsNumber()
  issuable_document_id?: number;

  @ApiProperty({
    description: 'Tipo de pago utilizado. (Opcional)',
    type: String,
  })
  @IsString()
  @IsOptional()
  type_payment?: string;

  @ApiProperty({
    description: 'Id del Tipo de pago utilizado. (WayToPay - Id)',
    type: Number,
  })
  @IsString()
  type_payment_id?: number;

  @ApiProperty({
    description: 'Moneda utilizada en la venta.',
    type: String,
  })
  @IsString()
  currency?: string;

  @ApiProperty({
    description: 'Símbolo de la moneda utilizada en la venta.',
    type: String,
  })
  @IsString()
  currency_symbol?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Id del área de almacén de origen.',
    type: Number,
  })
  @IsNumber()
  origin_warehouse_id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Nota adicional de la venta.',
    type: String,
  })
  @IsString()
  note?: string;

  @ApiProperty({
    description: 'Tipo de orden (Orden de venta/Orden de servicio).',
    enum: OrderTypes,
    default: OrderTypes.SALE,
  })
  @IsNotEmpty()
  @IsEnum(OrderTypes)
  order_type?: OrderTypes;

  @ApiProperty({
    description: 'Total de productos en la venta.',
    type: Number,
  })
  @IsNumber()
  total_products?: number;

  @ApiProperty({
    description: 'Monto total de la venta.',
    type: Number,
  })
  @IsNumber()
  total_sale?: number;

  @ApiProperty({
    description: 'Subtotal de la venta.',
    type: Number,
  })
  @IsNumber()
  sub_total_sale?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Descuento aplicado.',
    type: Number,
  })
  @IsNumber()
  sub_discount?: number;

  @ApiProperty({
    description: 'Monto neto de la venta.',
    type: Number,
  })
  @IsNumber()
  neto_sale?: number;

  @ApiProperty({
    description: 'Impuesto sobre las ventas (IGV).',
    type: Number,
  })
  @IsNumber()
  igv?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Monto gravado.',
    type: Number,
  })
  @IsNumber()
  taxed?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Fecha de la venta.',
    type: Date,
  })
  @IsDateString()
  sale_date?: Date;

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => ProductSaleDto)
  @ApiProperty({
    description: 'Productos de la venta.',
    type: [ProductSaleDto],
  })
  @IsNotEmpty()
  products?: ProductSaleDto[];

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => SalesPaymentDto)
  @ApiProperty({
    description: 'Abonos de la venta.',
    type: [SalesPaymentDto],
  })
  @IsNotEmpty()
  @IsOptional()
  sales_payment?: SalesPaymentDto[];
  
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => PaymentScheduleDto)
  @ApiProperty({
    description: 'Cronograma de pagos.',
    type: [PaymentScheduleDto],
  })
  @IsNotEmpty()
  @IsOptional()
  payment_schedule?: PaymentScheduleDto[];

  @ApiPropertyOptional({
    description: 'Id del Punto de entrega.',
    type: Number,
  })
  @IsNumber()
  delivery_point_id?: number;

  @ApiPropertyOptional({
    description: 'Fecha de creación del registro.',
    type: Date,
  })
  @IsOptional()
  @IsDateString()
  @ApiResponseProperty({
    type: Date,
  })
  created_at?: Date;

  @ApiPropertyOptional({
    description: 'Fecha de actualización del registro.',
    type: Date,
  })
  @IsOptional()
  @IsDateString()
  @ApiResponseProperty({
    type: Date,
  })
  updated_at?: Date;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Fecha de eliminación (borrado lógico).',
    type: Date,
  })
  @ApiResponseProperty({
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class DeleteSaleDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneSaleDto extends PartialType(SaleDto) { }
export class AllSaleDto extends PartialType(SaleDto) { }
export class NewSaleDto extends OmitType(SaleDto, ['id'] as const) { }
export class UpdateSaleDto extends OmitType(SaleDto, ['id'] as const) { }