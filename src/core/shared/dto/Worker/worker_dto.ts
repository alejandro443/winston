import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class WorkerDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id del trabajador.',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Código del trabajador.',
    type: String,
  })
  @IsString()
  code?: string;

  @ApiPropertyOptional({
    description: 'Estado del trabajador (Activo/Inactivo)',
    type: Boolean,
    default: true,
  })
  @IsBoolean()
  status?: boolean;

  @ApiPropertyOptional({
    description: 'Id de usuario(opcional).',
    type: String,
  })
  @IsNumber()
  user_id?: number;

  @ApiPropertyOptional({
    description: 'Identification de la persona.',
    type: String,
  })
  @IsString()
  person_identification?: string;

  @ApiPropertyOptional({
    description: 'Código del tipo de trabajador.',
    type: String,
  })
  @IsString()
  type_worker_code?: string;

  @ApiPropertyOptional({
    description: 'Código de la clasificación del trabajador.',
    type: String,
  })
  @IsString()
  classification_code?: string;

  @ApiPropertyOptional({
    description: 'Código del grupo al que pertenece el trabajador.',
    type: String,
  })
  @IsString()
  group_code?: string;

  @ApiResponseProperty({
    type: Date,
  })
  @ApiPropertyOptional({
    description: 'Fecha de creación',
    type: Date,
  })
  created_at?: Date;
}

export class DeleteWorkerDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export interface OneWorkerDto extends WorkerDto {}
export interface AllWorkerDto extends WorkerDto {}
export interface NewWorkerDto
  extends Omit<WorkerDto, 'id, created_at, updated_at, deleted_at'> {}
export interface UpdateWorkerDto
  extends Omit<WorkerDto, 'id, created_at, updated_at, deleted_at'> {}
