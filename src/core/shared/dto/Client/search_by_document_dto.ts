import { OmitType, PartialType, getSchemaPath } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsArray, IsBoolean, IsDateString, IsNumber, IsObject, IsOptional, IsString, ValidateIf } from 'class-validator';

export class SearchByDocumentDto {
  @ApiProperty({
    description: 'Desde donde a llegado a conseguir la data. (Owner - Reniec - Sunat)',
    type: String,
  })
  @IsString()
  from?: string;

  @ApiProperty({
    description: 'Nombre',
    type: String,
  })
  @IsString()
  name?: string;
  
  @ApiProperty({
    description: 'Identificación del cliente que se esta buscando.',
    type: String,
  })
  @IsString()
  main_identification?: string;

  @ApiProperty({
    description: 'Nombre de la persona o empresa.',
    type: String,
    required: false,
  })
  @ValidateIf((o) => o.from == 'owner')
  @IsString()
  list_price_id?: number;

}
