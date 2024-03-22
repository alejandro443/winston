import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class AccessDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id del acceso',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
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

  @ApiProperty({
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

  @ApiProperty({
    description: 'Icono del acceso',
    type: String,
  })
  @IsString()
  icon?: string;

  @ApiProperty({
    description: 'Texto alternativo del icono',
    type: String,
  })
  @IsString()
  alt?: string;

  @ApiProperty({
    description: 'Prioridad del acceso',
    type: Number,
  })
  @IsNumber()
  priority?: number;

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

export interface OneAccessDto extends AccessDto {}
export interface AllAccessDto extends AccessDto {}
export interface NewAccessDto extends Omit<AccessDto, 'id'> {}
export interface UpdateAccessDto extends Omit<AccessDto, 'id'> {}
