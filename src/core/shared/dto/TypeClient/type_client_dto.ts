import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

class TypeClientDto {
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
export class DeleteTypeClientDto {
  @IsDateString()
  deleted_at?: Date;
}

export interface OneTypeClientDto extends TypeClientDto {}
export interface AllTypeClientDto extends TypeClientDto {}
export interface NewTypeClientDto extends Omit<TypeClientDto, 'id'> {}
export interface UpdateTypeClientDto extends Omit<TypeClientDto, 'id'> {}
