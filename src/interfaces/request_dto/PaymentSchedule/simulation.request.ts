import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsEnum, IsNotEmpty } from "class-validator";
import { ENUM } from "sequelize";

enum Period {
  day = 'day',
  week = 'week',
  month = 'month',
  year = 'year'
}

export class SimulationRequestDto{
  @ApiPropertyOptional({
    description: 'Fecha de inicio del primer pago.',
    type: Date,
  })
  date_first_payment?: Date;

  @ApiProperty({
    description: 'Total de la venta.',
    type: Number,
  })
  total_sale?: number;

  @ApiProperty({
    description: 'Numero de las cuotas.',
    type: Number,
  })
  number_quotas?: number;
  
  @ApiPropertyOptional({
    description: 'Periodo de gracia.',
    type: Number,
  })
  waiting_period?: number;
  
  @ApiProperty({
    description: 'Periodo a calcular para cada cuota.',
    enum: Period,
    default: Period.day,
  })
  @IsNotEmpty()
  @IsEnum(Period)
  period?: Period;
}
