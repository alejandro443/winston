import { OmitType, PartialType } from '@nestjs/swagger';
import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsDateString, IsNumber, IsObject, IsOptional, IsString } from 'class-validator';

export class CompanyDto {
  @ApiResponseProperty()
  @ApiPropertyOptional({
    description: 'Id del cliente empresa.',
    type: Number,
  })
  @IsNumber()
  declare id: number;

  @ApiProperty({
    description: 'Numero de identificación de la compañia.',
    type: String,
  })
  @IsString()
  declare main_identification: string;

  @ApiProperty({
    description:
      'Tipo de identificación registrado para el numero de identificación de la compañia.',
    type: String,
  })
  @IsString()
  declare type_identification: string;

  @ApiProperty({
    description: 'Nombre de la compañia.',
    type: String,
  })
  @IsString()
  declare name: string;
  
  @ApiProperty({
    description: 'Nombre comercial de la compañia.',
    type: String,
  })
  @IsString()
  declare trade_name: string;
  
  
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Numero de celular principal de la compañia.',
    type: String,
  })
  @IsString()
  declare main_phone: string;
  
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Direccion email de la compañia.',
    type: String,
  })
  @IsString()
  declare main_email: string;
  
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Direccion url de la compañia.',
    type: String,
  })
  @IsString()
  declare website_url: string;
  
  @ApiPropertyOptional({
    description: 'Condición de la compañia.',
    type: String,
  })
  @IsString()
  @IsOptional()
  declare condition: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Direccion principal de la compañia.',
    type: String,
  })
  @IsString()
  declare main_direction: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Tipo de compañia.',
    type: String,
  })
  @IsString()
  declare type_company: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Tipo de industria de la compañia.',
    type: String,
  })
  @IsString()
  declare type_industry: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Ubigeo de la compañia.',
    type: String,
  })
  @IsString()
  declare zip_code: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Pais de la compañia.',
    type: String,
  })
  @IsString()
  declare country: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Departamento de la compañia.',
    type: String,
  })
  @IsString()
  declare department: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Provincia de la compañia.',
    type: String,
  })
  @IsString()
  declare province: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Distrito de la compañia.',
    type: String,
  })
  @IsString()
  declare district: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Fecha de fundación de la compañia.',
    type: String,
  })
  @IsDateString()
  declare foundation_date: Date;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Arrays de numeros de celulares secundarios de la compañia.',
    type: Array,
  })
  @IsArray()
  declare phones: [];

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Arrays de direcciones secundarios de la compañia.',
    type: Array,
  })
  @IsArray()
  declare directions: [];

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Arrays de emails secundarios de la compañia.',
    type: Array,
  })
  @IsArray()
  declare emails: [];

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Ubigeo de la compañia.',
    type: Object,
  })
  @IsObject()
  ubigeo?: object;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado del cliente compañia (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  declare status: boolean;

  @ApiResponseProperty()
  @IsOptional()
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