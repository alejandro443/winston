import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString, IsUUID } from 'class-validator';

export class PaymentScheduleDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'ID del cronograma de pagos',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'UUID del cronograma de pagos',
    type: String,
  })
  @IsUUID()
  uuid: string;

  @ApiProperty({
    description: 'Número de cuota',
    type: Number,
  })
  @IsNumber()
  number_quota: number;

  @ApiProperty({
    description: 'Etiqueta del pago',
    type: String,
  })
  @IsString()
  label: string;

  @ApiProperty({
    description: 'Fecha límite para el pago',
    type: Date,
  })
  @IsDateString()
  deadline: Date;

  @ApiProperty({
    description: 'Fecha de pago',
    type: Date,
  })
  @IsDateString()
  payment_date: Date;

  @ApiProperty({
    description: 'Monto del pago',
    type: Number,
  })
  @IsNumber()
  payment_amount: number;

  @ApiProperty({
    description: 'Monto total',
    type: Number,
  })
  @IsNumber()
  amount: number;

  @ApiProperty({
    description: 'Residuo restante',
    type: Number,
  })
  @IsNumber()
  residue: number;

  @ApiPropertyOptional({
    description: 'Indica si el pago está completado',
    type: Boolean,
    default: false,
  })
  @IsBoolean()
  done: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado del cronograma de pagos (Activo/Inactivo)',
    type: Boolean,
    default: true,
  })
  @IsBoolean()
  status?: boolean;

  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'ID del cronograma de pagos asociado',
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  sale_payment_schedule_id: number;

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

export class DeletePaymentScheduleDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OnePaymentScheduleDto extends PartialType(PaymentScheduleDto) {}
export class AllPaymentScheduleDto extends PartialType(PaymentScheduleDto) {}
export class NewPaymentScheduleDto extends OmitType(PaymentScheduleDto, ['id', 'created_at', 'updated_at', 'deleted_at'] as const) {}
export class UpdatePaymentScheduleDto extends OmitType(PaymentScheduleDto, ['id', 'created_at', 'updated_at', 'deleted_at'] as const) {}
