import { OmitType, PartialType, getSchemaPath } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsArray, IsBoolean, IsDateString, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';
import { PersonDto } from '../Person/person_dto';
import { CompanyDto } from '../Company/company_dto';
import { PointSaleDto } from '../PointSale/point_sale_dto';

export class ClientDto {
  @ApiProperty({
    description:
      'Tipo de entidad a registrar en el cliente, Si es de tipo persona o tipo empresa',
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

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Código del cliente',
    type: String,
  })
  @IsString()
  @IsOptional()
  declare code?: string;

  @ApiResponseProperty()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'ID del usuario asociado al cliente',
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  declare user_id?: number;

  @ApiResponseProperty()
  @IsOptional()
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

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Código de clasificación del cliente',
    type: Number,
  })
  @IsNumber()
  declare classification_id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Id de la seccion comercial del cliente',
    type: Number,
  })
  @IsNumber()
  declare commercial_section_id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Código del grupo al que pertenece el cliente',
    type: Number,
  })
  @IsNumber()
  declare group_id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Id de metodo de pago.',
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  declare method_payment_id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Id de forma de pago.',
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  declare way_to_pay_id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Array de ids de documentos.',
    type: [Number],
  })
  @IsArray()
  @IsOptional()
  declare issuable_documents_ids?: number[];

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Array de encargados.',
    type: [PersonDto],
  })
  @IsArray()
  @IsOptional()
  declare manager_details?: PersonDto[];

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Array de puntos de entrega.',
    type: [PointSaleDto],
  })
  @IsArray()
  @IsOptional()
  declare delivery_data?: PointSaleDto[];

  @ApiProperty({
    description: 'Entidad de cliente.',
    oneOf: [{ $ref: getSchemaPath(PersonDto) }, { $ref: getSchemaPath(CompanyDto) }],
  })
  @IsObject()
  declare entity?: PersonDto | CompanyDto;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Id de giro.',
    type: Number,
  })
  @IsNumber()
  declare business_turn_id?: number;
 
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Id de sub giro.',
    type: Number,
  })
  @IsNumber()
  declare business_subcategory_id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Id de la zona.',
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  declare zone_id?: number;

  @ApiProperty({
    description: 'Id de la lista de precio a la que va a pertenecer el cliente.',
    type: Number,
  })
  @IsNumber()
  declare list_price_id?: number;

  @IsOptional()
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
  @IsOptional()
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