import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
  OmitType,
  PartialType,
} from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class SettingDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id de la configuración del sistema.',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre de la configuración del sistema.',
    type: String,
  })
  @IsString()
  option?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Valor de la configuración del sistema.',
    type: String,
  })
  @IsString()
  value?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Tipo de valor de la configuración del sistema.',
    type: String,
  })
  @IsString()
  type_value?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado del tipo de cliente (Activo/Inactivo)',
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

export class OneSettingDto extends PartialType(SettingDto) { }
export class AllSettingDto extends PartialType(SettingDto) { }
export class UpdateSettingDto extends OmitType(SettingDto, ['option'] as const) { }
