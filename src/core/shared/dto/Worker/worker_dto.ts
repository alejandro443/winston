import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

class WorkerDto {
  @IsNumber()
  id?: number;

  @IsString()
  code?: string;

  @IsBoolean()
  status?: boolean;

  @IsNumber()
  user_id?: number;

  @IsString()
  person_identification?: string;

  @IsString()
  type_worker_code?: string;

  @IsString()
  classification_code?: string;

  @IsString()
  group_code?: string;

  @IsDateString()
  created_at?: Date;

  @IsDateString()
  updated_at?: Date;

  @IsDateString()
  deleted_at?: Date;
}

export class DeleteWorkerDto {
  @IsDateString()
  deleted_at?: Date;
}

export interface OneWorkerDto extends WorkerDto {}
export interface AllWorkerDto extends WorkerDto {}
export interface NewWorkerDto
  extends Omit<WorkerDto, 'id, created_at, updated_at, deleted_at'> {}
export interface UpdateWorkerDto
  extends Omit<WorkerDto, 'id, created_at, updated_at, deleted_at'> {}
