import { ApiPropertyOptional, ApiResponseProperty } from "@nestjs/swagger";

export class OnlyAllPaymentResponseDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id de la cuota de pago',
    type: Number,
  })
  id?: number;

  @ApiResponseProperty({
    type: String,
  })
  @ApiPropertyOptional({
    description: 'UUID de la cuota de pago',
    type: String,
  })
  uuid?: string;

  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Número de cuota',
    type: Number,
  })
  number_quota?: number;

  @ApiResponseProperty({
    type: Boolean,
  })
  @ApiPropertyOptional({
    description: 'Estado de la cuota (Pagado o no Pagado)',
    type: Boolean,
  })
  done?: boolean;

  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Total acumulado pagado',
    type: Number,
  })
  total_accumulated_payment?: number;

  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Monto del pago',
    type: Number,
  })
  payment_amount?: number;

  @ApiResponseProperty({
    type: String,
  })
  @ApiPropertyOptional({
    description: 'Fecha de pago en formato DD/MM/YYYY',
    type: String,
  })
  payment_date?: string;

  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Días de retraso en el pago',
    type: Number,
  })
  days_late?: number;
}
