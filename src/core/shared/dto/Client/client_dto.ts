import { OmitType, PartialType } from '@nestjs/mapped-types';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class ClientDto {
  @ApiProperty({
    description: 'Tipo de entidad a registrar en el cliente, Si es de tipo persona o tipo empresa',
    type: String,
    enum: { company: 'company', person: 'person' }
  })
  @IsString()
  declare type_entity?: string;

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
  @IsOptional()
  declare code?: string;

  @ApiResponseProperty()
  @ApiPropertyOptional({
    description: 'ID del usuario asociado al cliente',
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  declare user_id?: number;

  @ApiResponseProperty()
  @ApiPropertyOptional({
    description: 'Id de la entidad asociada al cliente (Persona/Compañia)',
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  declare entity_id?: number;

  @ApiProperty({
    description: 'Id del tipo de cliente',
    type: Number,
  })
  @IsNumber()
  declare type_client_id?: number;
  
  @ApiProperty({
    description: 'Id del tipo de canal de entrada',
    type: Number,
  })
  @IsNumber()
  declare type_channel_id?: number;

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
  declare entity?: {};

  @ApiPropertyOptional({
    description: 'Estado del cliente (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
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

export class OneClientDto extends PartialType(ClientDto) { }
export class AllClientDto extends PartialType(ClientDto) { }
export class NewClientDto extends OmitType(ClientDto, ['id', 'created_at'] as const) { }
export class UpdateClientDto extends OmitType(ClientDto, ['id', 'created_at'] as const) { }