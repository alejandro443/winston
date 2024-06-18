import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class CountryDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id del país',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre del país',
    type: String,
  })
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'Código ISO del país',
    type: String,
  })
  @IsString()
  code_ISO?: string;

  @ApiPropertyOptional({
    description: 'Moneda del país',
    type: String,
  })
  @IsString()
  currency?: string;

  @ApiPropertyOptional({
    description: 'Idioma del país',
    type: String,
  })
  @IsString()
  language?: string;

  @ApiProperty({
    description: 'ID de la región a la que pertenece el país',
    type: Number,
  })
  @IsNumber()
  region_id?: number;

  @ApiPropertyOptional({
    description: 'Código telefónico del país',
    type: String,
  })
  @IsString()
  phone_code?: string;

  @ApiPropertyOptional({
    description: 'Tasa de impuestos del país',
    type: Number,
  })
  @IsString()
  tax_rate?: number;

  @ApiPropertyOptional({
    description: 'Zona horaria del país',
    type: String,
  })
  @IsString()
  timezone?: string;

  @ApiPropertyOptional({
    description: 'Estado del país (Activo/Desactivo)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  active?: boolean;
}

export class DeleteCountryDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export interface AllCountryDto extends CountryDto {}
export interface OneCountryDto extends CountryDto {}
export interface NewCountryDto extends Omit<CountryDto, 'id'> {}
export interface UpdateCountryDto extends Omit<CountryDto, 'id'> {}
