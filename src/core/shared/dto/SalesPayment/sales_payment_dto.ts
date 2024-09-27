import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class SalesPaymentDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'ID del pago',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Monto del pago',
    type: Number,
  })
  @IsNumber()
  amount: number;

  @ApiProperty({
    description: 'Método de pago',
    type: String,
  })
  @IsString()
  method_payment: string;

  @ApiProperty({
    description: 'Número de operación',
    type: String,
  })
  @IsString()
  operation_number: string;

  @ApiProperty({
    description: 'Nombre del banco',
    type: String,
  })
  @IsString()
  bank_name: string;

  @ApiProperty({
    description: 'Observación del pago.',
    type: String,
  })
  @IsString()
  @IsOptional()
  observation: string;

  @ApiProperty({
    description: 'Fecha de pago',
    type: Date,
  })
  @IsDateString()
  payment_date: Date;

  @ApiResponseProperty({
    type: Date,
  })
  @ApiPropertyOptional({
    description: 'ID de la venta',
    type: Number,
  })
  @IsNumber()
  sale_id: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado del pago (Activo/Inactivo)',
    type: Boolean,
    default: true,
  })
  @IsBoolean()
  status?: boolean;

  @ApiResponseProperty({
    type: Date,
  })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Fecha de creación',
    type: Date,
  })
  created_at?: Date;

  @ApiResponseProperty({
    type: Date,
  })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Fecha de actualización',
    type: Date,
  })
  updated_at?: Date;

  @ApiResponseProperty({
    type: Date,
  })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Fecha de eliminación',
    type: Date,
  })
  deleted_at?: Date;
}

export class DeleteSalesPaymentDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneSalesPaymentDto extends PartialType(SalesPaymentDto) {}
export class AllSalesPaymentDto extends PartialType(SalesPaymentDto) {}
export class NewSalesPaymentDto extends OmitType(SalesPaymentDto, ['id', 'created_at', 'updated_at', 'deleted_at'] as const) {}
export class UpdateSalesPaymentDto extends OmitType(SalesPaymentDto, ['id', 'created_at', 'updated_at', 'deleted_at'] as const) {}
