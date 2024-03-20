import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class ClientDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id del cliente',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Código del cliente',
    type: String,
  })
  @IsString()
  code?: string;

  @ApiProperty({
    description: 'ID del usuario asociado al cliente',
    type: Number,
  })
  @IsNumber()
  user_id?: number;

  @ApiProperty({
    description: 'Identificación de la persona asociada al cliente',
    type: String,
  })
  @IsString()
  person_identification?: string;

  @ApiProperty({
    description: 'Código del tipo de cliente',
    type: String,
  })
  @IsString()
  type_client_code?: string;

  @ApiProperty({
    description: 'Código de clasificación del cliente',
    type: String,
  })
  @IsString()
  classification_code?: string;

  @ApiProperty({
    description: 'Código del grupo al que pertenece el cliente',
    type: String,
  })
  @IsString()
  group_code?: string;

  @ApiProperty({
    description: 'Estado del cliente (Activo/Desactivado)',
    default: true,
    type: Boolean,
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

export class DeleteClientDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export interface OneClientDto extends ClientDto {}
export interface AllClientDto extends ClientDto {}
export interface NewClientDto
  extends Omit<ClientDto, 'id, created_at, updated_at, deleted_at'> {}
export interface UpdateClientDto
  extends Omit<ClientDto, 'id, created_at, updated_at, deleted_at'> {}
