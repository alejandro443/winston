import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class AccessDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiProperty({
    description: 'Id del acceso',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'ID del padre',
    type: Number,
  })
  @IsNumber()
  father?: number;

  @ApiProperty({
    description: 'Nombre del acceso',
    type: String,
  })
  @IsString()
  name?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Descripción del acceso',
    type: String,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'URL del acceso',
    type: String,
  })
  @IsString()
  url?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Icono del acceso',
    type: String,
  })
  @IsString()
  icon?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Texto alternativo del icono',
    type: String,
  })
  @IsString()
  alt?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Prioridad del acceso',
    type: Number,
  })
  @IsNumber()
  priority?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado del acceso (Activo/Inactivo)',
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

export class DeleteAccessDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneAccessDto extends PartialType(AccessDto) { }
export class AllAccessDto extends PartialType(AccessDto) { }
export class NewAccessDto extends OmitType(AccessDto, ['id'] as const) { }
export class UpdateAccessDto extends OmitType(AccessDto, ['id'] as const) { }