import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

class ClientDto {
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
  type_client_code?: string;

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

export class DeleteClientDto {
  @IsDateString()
  deleted_at?: Date;
}

export interface OneClientDto extends ClientDto {}
export interface AllClientDto extends ClientDto {}
export interface NewClientDto
  extends Omit<ClientDto, 'id, created_at, updated_at, deleted_at'> {}
export interface UpdateClientDto
  extends Omit<ClientDto, 'id, created_at, updated_at, deleted_at'> {}
