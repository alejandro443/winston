import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
  OmitType,
  PartialType,
} from '@nestjs/swagger';
import { TypeUnitMeasurement } from '@src/infraestructure/shared/enums/TypeUnitMeasurement';
import { IsBoolean, IsDateString, IsEnum, IsNumber, IsOptional, IsString } from 'class-validator';

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

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Código del tipo de unidad de medida.',
    type: String,
  })
  @IsString()
  code?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Nombre del tipo de unidad de medida.',
    type: String,
  })
  @IsString()
  name?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Abreviacion del tipo de unidad de medida.',
    type: String,
  })
  @IsString()
  abbreviation?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Factor de conversión del tipo de unidad de medida.',
    type: String,
  })
  @IsString()
  convertion_factor?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Tipo del tipo de unidad de medida.',
    enum: TypeUnitMeasurement,
  })
  @IsEnum(TypeUnitMeasurement)
  type?: string;

  @IsOptional()
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
  @IsOptional()
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