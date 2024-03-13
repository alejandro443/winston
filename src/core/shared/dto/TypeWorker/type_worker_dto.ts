import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

class TypeWorkerDto {
  @IsNumber()
  id?: number;

  @IsString()
  name?: string;

  @IsString()
  description?: string;

  @IsString()
  code?: string;

  @IsBoolean()
  status?: boolean;
}
export class DeleteTypeWorkerDto {
  @IsDateString()
  deleted_at?: Date;
}

export interface OneTypeWorkerDto extends TypeWorkerDto {}
export interface AllTypeWorkerDto extends TypeWorkerDto {}
export interface NewTypeWorkerDto extends Omit<TypeWorkerDto, 'id'> {}
export interface UpdateTypeWorkerDto extends Omit<TypeWorkerDto, 'id'> {}
