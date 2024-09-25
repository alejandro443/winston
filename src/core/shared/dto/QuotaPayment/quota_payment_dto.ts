import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
  OmitType,
  PartialType,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class QuotaPaymentDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'ID del pago de cuota.',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiResponseProperty({
    type: String,
  })
  @ApiProperty({
    description: 'UUID criptográfico generado automáticamente.',
    type: String,
  })
  @IsUUID()
  crypto_uuid?: string;

  @ApiProperty({
    description: 'Monto del pago.',
    type: Number,
  })
  @IsNumber()
  amount: number;

  @ApiProperty({
    description: 'Método de pago utilizado.',
    type: String,
  })
  @IsString()
  method_payment: string;

  @ApiProperty({
    description: 'Número de operación del pago.',
    type: String,
  })
  @IsString()
  operation_number: string;

  @ApiProperty({
    description: 'Nombre del banco.',
    type: String,
  })
  @IsString()
  bank_name: string;

  @ApiProperty({
    description: 'Fecha del pago.',
    type: Date,
  })
  @IsDateString()
  payment_date: Date;

  @ApiPropertyOptional({
    description: 'Imagen del voucher del pago.',
    type: String,
  })
  @IsOptional()
  @IsString()
  voucher_image?: string;

  @ApiProperty({
    description: 'ID de la programación de pagos asociada.',
    type: Number,
  })
  @IsNumber()
  payment_schedule_id: number;

  @ApiProperty({
    description: 'ID del usuario que realizó el pago.',
    type: Number,
  })
  @IsNumber()
  user_id: number;

  @ApiProperty({
    description: 'Estado del pago (Activo/Inactivo).',
    type: Boolean,
    default: true,
  })
  @IsBoolean()
  @IsOptional()
  status: boolean;

  @ApiResponseProperty({
    type: Date,
  })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Fecha de creación del pago.',
    type: Date,
  })
  created_at?: Date;

  @ApiResponseProperty({
    type: Date,
  })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Fecha de última actualización del pago.',
    type: Date,
  })
  updated_at?: Date;
}

export class DeleteQuotaPaymentDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneQuotaPaymentDto extends PartialType(QuotaPaymentDto) {}
export class AllQuotaPaymentDto extends PartialType(QuotaPaymentDto) {}
export class NewQuotaPaymentDto extends OmitType(QuotaPaymentDto, ['id'] as const) {}
export class UpdateQuotaPaymentDto extends OmitType(QuotaPaymentDto, ['id'] as const) {}
