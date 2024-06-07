import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
  OmitType,
  PartialType,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class UnitMeasurementDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id del tipo de la unidad de medida.',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Código del tipo de unidad de medida.',
    type: String,
  })
  @IsString()
  code?: string;

  @ApiProperty({
    description: 'Nombre del tipo de unidad de medida.',
    type: String,
  })
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Abreviacion del tipo de unidad de medida.',
    type: String,
  })
  @IsString()
  abbreviation?: string;
  
  @ApiProperty({
    description: 'Factor de conversión del tipo de unidad de medida.',
    type: String,
  })
  @IsString()
  convertion_factor?: string;
  
  @ApiProperty({
    description: 'Tipo del tipo de unidad de medida.',
    type: String,
  })
  @IsString()
  type?: string;

  @ApiPropertyOptional({
    description: 'Estado del tipo de unidad de medida (Activo/Inactivo)',
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
export class DeleteUnitMeasurementDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneUnitMeasurementDto extends PartialType(UnitMeasurementDto) { }
export class AllUnitMeasurementDto extends PartialType(UnitMeasurementDto) { }
export class NewUnitMeasurementDto extends OmitType(UnitMeasurementDto, ['id'] as const) { }
export class UpdateUnitMeasurementDto extends OmitType(UnitMeasurementDto, ['id'] as const) { }