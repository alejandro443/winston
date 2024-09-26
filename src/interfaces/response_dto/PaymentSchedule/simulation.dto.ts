import { ApiPropertyOptional } from "@nestjs/swagger";

export class SimulationResponseDto{
  @ApiPropertyOptional({
    description: 'UUID de la cuota de pago',
    type: String,
  })
  uuid?: string;

  @ApiPropertyOptional({
    description: 'Número de la cuota',
    type: Number,
  })
  number_quota?: number;

  @ApiPropertyOptional({
    description: 'Etiqueta asociada a la cuota',
    type: String,
  })
  label?: string;

  @ApiPropertyOptional({
    description: 'Fecha límite para el pago',
    type: String, // Puedes usar Date si prefieres manejarlo como objeto de fecha
  })
  deadline?: string;

  @ApiPropertyOptional({
    description: 'Monto del pago',
    type: Number,
  })
  payment_amount?: number;

  @ApiPropertyOptional({
    description: 'Fecha en que se realizó el pago',
    type: String, // Puedes usar Date si prefieres manejarlo como objeto de fecha
  })
  payment_date?: string;
}
