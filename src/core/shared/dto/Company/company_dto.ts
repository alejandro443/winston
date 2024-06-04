import { OmitType, PartialType } from '@nestjs/mapped-types';
import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class CompanyDto {
  @ApiResponseProperty()
  @ApiPropertyOptional({
    description: 'Id del cliente empresa.',
    type: Number,
  })
  @IsNumber()
  declare id: number;

  @ApiPropertyOptional({
    description: 'Numero de identificación de la compañia.',
    type: String,
  })
  @IsString()
  declare main_identification: string;

  @ApiPropertyOptional({
    description:
      'Tipo de identificación registrado para el numero de identificación de la compañia.',
    type: String,
  })
  @IsString()
  declare type_identification: string;

  @ApiPropertyOptional({
    description: 'Nombre de la compañia.',
    type: String,
  })
  @IsString()
  declare name: string;

  @ApiPropertyOptional({
    description: 'Numero de celular principal de la compañia.',
    type: String,
  })
  @IsString()
  declare main_phone: string;

  @ApiPropertyOptional({
    description: 'Direccion email de la compañia.',
    type: String,
  })
  @IsString()
  declare main_email: string;

  @ApiPropertyOptional({
    description: 'Direccion url de la compañia.',
    type: String,
  })
  @IsString()
  declare website_url: string;

  @ApiPropertyOptional({
    description: 'Direccion principal de la compañia.',
    type: String,
  })
  @IsString()
  declare main_direction: string;

  @ApiPropertyOptional({
    description: 'Tipo de compañia.',
    type: String,
  })
  @IsString()
  declare type_company: string;

  @ApiPropertyOptional({
    description: 'Tipo de industria de la compañia.',
    type: String,
  })
  @IsString()
  declare type_industry: string;

  @ApiPropertyOptional({
    description: 'Ubigeo de la compañia.',
    type: String,
  })
  @IsString()
  declare zip_code: string;

  @ApiPropertyOptional({
    description: 'Pais de la compañia.',
    type: String,
  })
  @IsString()
  declare country: string;

  @ApiPropertyOptional({
    description: 'Departamento de la compañia.',
    type: String,
  })
  @IsString()
  declare department: string;

  @ApiPropertyOptional({
    description: 'Provincia de la compañia.',
    type: String,
  })
  @IsString()
  declare province: string;

  @ApiPropertyOptional({
    description: 'Distrito de la compañia.',
    type: String,
  })
  @IsString()
  declare district: string;

  @ApiPropertyOptional({
    description: 'Fecha de fundación de la compañia.',
    type: String,
  })
  @IsDateString()
  declare foundation_date: Date;

  @ApiPropertyOptional({
    description: 'Arrays de numeros de celulares secundarios de la compañia.',
    type: Array,
  })
  @IsArray()
  declare phones: [];

  @ApiPropertyOptional({
    description: 'Arrays de direcciones secundarios de la compañia.',
    type: Array,
  })
  @IsArray()
  declare directions: [];

  @ApiPropertyOptional({
    description: 'Arrays de emails secundarios de la compañia.',
    type: Array,
  })
  @IsArray()
  declare emails: [];

  @ApiPropertyOptional({
    description: 'Estado del cliente compañia (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  declare status: boolean;

  @ApiResponseProperty()
  @ApiPropertyOptional({
    description: 'Fecha de creación',
    type: Date,
  })
  declare created_at?: Date;
}

export class DeleteCompanyDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  declare deleted_at: Date;
}

export class OneCompanyDto extends PartialType(CompanyDto) { }
export class AllCompanyDto extends PartialType(CompanyDto) { }
export class NewCompanyDto extends OmitType(CompanyDto, ['id', 'created_at'] as const) { }
export class UpdateCompanyDto extends OmitType(CompanyDto, ['id', 'created_at'] as const) { }