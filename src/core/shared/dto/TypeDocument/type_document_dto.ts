import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

class TypeDocumentDto {
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
export class DeleteTypeDocumentDto {
  @IsDateString()
  deleted_at?: Date;
}

export interface OneTypeDocumentDto extends TypeDocumentDto {}
export interface AllTypeDocumentDto extends TypeDocumentDto {}
export interface NewTypeDocumentDto extends Omit<TypeDocumentDto, 'id'> {}
export interface UpdateTypeDocumentDto extends Omit<TypeDocumentDto, 'id'> {}
