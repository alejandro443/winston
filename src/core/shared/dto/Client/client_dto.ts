import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import {
  IsBoolean,
  IsDateString,
  IsNumber,
  IsObject,
  IsString,
} from 'class-validator';

export class ClientDto {
  @ApiProperty({
    description:
      'Tipo de entidad a registrar en el cliente, Si es de tipo persona o tipo empresa',
    type: String,
    enum: { company: 'company', person: 'person' },
  })
  @IsString()
  declare type_entity: string;

  @ApiResponseProperty()
  @ApiPropertyOptional({
    description: 'Id del cliente',
    type: Number,
  })
  @IsNumber()
  declare id?: number;

  @ApiPropertyOptional({
    description: 'Código del cliente',
    type: String,
  })
  @IsString()
  declare code?: string;

  @ApiResponseProperty()
  @ApiPropertyOptional({
    description: 'ID del usuario asociado al cliente',
    type: Number,
  })
  @IsNumber()
  declare user_id?: number;

  @ApiResponseProperty()
  @ApiPropertyOptional({
    description: 'Id de la persona asociada al cliente',
    type: Number,
  })
  @IsNumber()
  declare person_id?: number;

  @ApiResponseProperty()
  @ApiPropertyOptional({
    description: 'Id de la empresa cliente asociada al registro.',
    type: Number,
  })
  @IsNumber()
  declare company_id?: number;

  @ApiProperty({
    description: 'Código del tipo de cliente',
    type: Number,
  })
  @IsNumber()
  declare type_client_id?: number;

  @ApiPropertyOptional({
    description: 'Código de clasificación del cliente',
    type: Number,
  })
  @IsNumber()
  declare classification_id?: number;

  @ApiPropertyOptional({
    description: 'Código del grupo al que pertenece el cliente',
    type: Number,
  })
  @IsNumber()
  declare group_id?: number;

  @ApiPropertyOptional({
    description: 'Entidad de cliente.',
    type: Object,
  })
  @IsObject()
  declare entity?: object;

  @ApiPropertyOptional({
    description: 'Estado del cliente (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  declare status?: boolean;

  @ApiResponseProperty({
    type: Date,
  })
  @ApiPropertyOptional({
    description: 'Fecha de creación',
    type: Date,
  })
  declare created_at?: Date;
}

export class DeleteClientDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  declare deleted_at?: Date;
}

export interface OneClientDto extends ClientDto {}
export interface AllClientDto extends ClientDto {}
export interface NewClientDto extends Omit<ClientDto, 'id, created_at'> {}
export interface UpdateClientDto extends Omit<ClientDto, 'id, created_at'> {}
