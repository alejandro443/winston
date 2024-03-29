import { IsArray, IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class CompanyDto {
  @IsNumber()
  declare id: number;

  @IsString()
  declare main_identification: string;
  
  @IsString()
  declare type_identification: string;
  
  @IsString()
  declare name_company: string;

  @IsString()
  declare main_phone: string;

  @IsString()
  declare main_email: string;

  @IsString()
  declare website_url: string;

  @IsString()
  declare main_direction: string;

  @IsString()
  declare type_company: string;

  @IsString()
  declare type_industry: string;

  @IsString()
  declare zip_code: string;

  @IsString()
  declare country: string;

  @IsString()
  declare department: string;

  @IsString()
  declare province: string;
  
  @IsString()
  declare district: string;

  @IsDateString()
  declare foundation_date: Date;

  @IsArray()
  declare phones: [];
  
  @IsArray()
  declare directions: [];
  
  @IsArray()
  declare emails: [];
  
  @IsBoolean()
  declare status: boolean;
}

export class DeleteCompanyDto {
  @IsDateString()
  declare deleted_at: Date;
}

export interface OneCompanyDto extends CompanyDto {}
export interface AllCompanyDto extends CompanyDto {}
export interface NewCompanyDto extends Omit<CompanyDto, 'id'> {}
export interface UpdateCompanyDto extends Omit<CompanyDto, 'id'> {}
