import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

class ClassificationDto {
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
export class DeleteClassificationDto {
  @IsDateString()
  deleted_at?: Date;
}

export interface OneClassificationDto extends ClassificationDto {}
export interface AllClassificationDto extends ClassificationDto {}
export interface NewClassificationDto extends Omit<ClassificationDto, 'id'> {}
export interface UpdateClassificationDto
  extends Omit<ClassificationDto, 'id'> {}
