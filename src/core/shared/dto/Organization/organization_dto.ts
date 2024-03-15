import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class OrganizationDto {

  @IsString()
  name?: string;

  @IsString()
  description?: string;

  @IsString()
  sector?: string;

  @IsString()
  ruc?: string;

  @IsString()
  type?: string;

  @IsString()
  year?: string;

  @IsString()
  direction?: string;

  @IsString()
  web_page?: string;

  @IsString()
  email?: string;

  @IsString()
  phone_one?: string;

  @IsString()
  phone_two?: string;

  @IsString()
  phone_three?: string;

  @IsString()
  representative_legal?: string;

  @IsString()
  representative_email?: string;

  @IsString()
  representative_phone?: string;

  @IsString()
  representative_direction?: string;

  @IsBoolean()
  status?: boolean;

  @IsBoolean()
  config_online?: boolean;

  @IsBoolean()
  open_cash?: boolean;

  @IsString()
  district?: string;

  @IsString()
  province?: string;

  @IsString()
  department?: string;

  @IsString()
  urbanization?: string;

  @IsString()
  ubigeo?: string;

  @IsString()
  country?: string;

  @IsString()
  comercial_name?: string;

  @IsBoolean()
  exonerated?: boolean;

  @IsString()
  instagram?: string;

  @IsString()
  facebook?: string;

  @IsString()
  youtube?: string;

  @IsString()
  whatsapp?: string;

  @IsString()
  tiktok?: string;

  @IsBoolean()
  edit_price?: boolean;

  @IsBoolean()
  footer?: boolean;

  @IsBoolean()
  accounts?: boolean;

  @IsString()
  footer_description?: string;

  @IsString()
  edit_documents?: string;

  @IsString()
  license?: string;

  @IsBoolean()
  point_sale?: boolean;

  @IsBoolean()
  store_online?: boolean;

  @IsBoolean()
  price_wholesale?: boolean;

  @IsNumber()
  amount_wholesale?: number;
}

export class DeleteOrganizationDto {
  @IsDateString()
  deleted_at?: Date;
}

export interface OneOrganizationDto extends OrganizationDto {}
export interface AllOrganizationDto extends OrganizationDto {}
export interface NewOrganizationDto extends Omit<OrganizationDto, 'id'> {}
export interface UpdateOrganizationDto
  extends Omit<OrganizationDto, 'id'> {}
