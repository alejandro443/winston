import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
  OmitType,
  PartialType,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

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

  @ApiProperty({
    description: 'Identification de la persona.',
    type: String,
  })
  @IsString()
  person_identification?: string;

  @ApiProperty({
    description: 'Id de persona del trabajador.',
    type: String,
  })
  @IsNumber()
  person_id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Id de usuario(opcional).',
    type: Number,
  })
  @IsNumber()
  user_id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado del trabajador (Activo/Inactivo)',
    type: Boolean,
    default: true,
  })
  @IsBoolean()
  status?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Id del tipo de trabajador.',
    type: Number,
  })
  @IsNumber()
  type_worker_id?: number;

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

export class DeleteWorkerDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneWorkerDto extends PartialType(WorkerDto) { }
export class AllWorkerDto extends PartialType(WorkerDto) { }
export class NewWorkerDto extends OmitType(WorkerDto, ['id', 'created_at'] as const) { }
export class UpdateWorkerDto extends OmitType(WorkerDto, ['id', 'created_at'] as const) { }