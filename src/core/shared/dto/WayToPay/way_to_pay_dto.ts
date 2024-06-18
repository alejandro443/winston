import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
  OmitType,
  PartialType,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class WayToPayDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id del tipo del forma de pago.',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre del tipo de forma de pago.',
    type: String,
  })
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'Descripción del tipo de forma de pago.',
    type: String,
  })
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Código del tipo de forma de pago.',
    type: String,
  })
  @IsString()
  code?: string;

  @ApiPropertyOptional({
    description: 'Estado del tipo de forma de pago (Activo/Inactivo)',
    type: Boolean,
    default: true,
  })
  @IsBoolean()
  status?: boolean;

  @ApiResponseProperty({
    type: Date,
  })
  @ApiPropertyOptional({
    description: 'Fecha de creación',
    type: Date,
  })
  created_at?: Date;
}

export class DeleteWayToPayDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneWayToPayDto extends PartialType(WayToPayDto) { }
export class AllWayToPayDto extends PartialType(WayToPayDto) { }
export class NewWayToPayDto extends OmitType(WayToPayDto, ['id'] as const) { }
export class UpdateWayToPayDto extends OmitType(WayToPayDto, ['id'] as const) { }