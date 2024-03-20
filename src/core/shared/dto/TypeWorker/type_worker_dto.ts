import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class TypeWorkerDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id del tipo de trabajador.',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre del tipo de trabajador',
    type: String,
  })
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Descripción del tipo de trabajador',
    type: String,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Código del tipo de trabajador',
    type: String,
  })
  @IsString()
  code?: string;

  @ApiPropertyOptional({
    description: 'Estado del tipo de trabajador (Activo/Inactivo)',
    type: Boolean,
    default: true
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
export class DeleteTypeWorkerDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export interface OneTypeWorkerDto extends TypeWorkerDto {}
export interface AllTypeWorkerDto extends TypeWorkerDto {}
export interface NewTypeWorkerDto extends Omit<TypeWorkerDto, 'id'> {}
export interface UpdateTypeWorkerDto extends Omit<TypeWorkerDto, 'id'> {}
