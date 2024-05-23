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

  @ApiProperty({
    description: 'Código ISO del país',
    type: String,
  })
  @IsString()
  code_ISO?: string;

  @ApiProperty({
    description: 'Moneda del país',
    type: String,
  })
  @IsString()
  currency?: string;

  @ApiProperty({
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

  @ApiProperty({
    description: 'Código telefónico del país',
    type: String,
  })
  @IsString()
  phone_code?: string;

  @ApiProperty({
    description: 'Tasa de impuestos del país',
    type: Number,
  })
  @IsString()
  tax_rate?: number;

  @ApiProperty({
    description: 'Zona horaria del país',
    type: String,
  })
  @IsString()
  timezone?: string;

  @ApiProperty({
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
