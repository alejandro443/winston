import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class OrganizationDto {

  @ApiProperty({
    description: 'ID de la organización',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Logo de la organización',
    type: String,
  })
  @IsString()
  logo?: string;

  @ApiProperty({
    description: 'Nombre de la organización',
    type: String,
  })
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Sector de la organización',
    type: String,
  })
  @IsString()
  sector?: string;

  @ApiProperty({
    description: 'RUC de la organización',
    type: String,
  })
  @IsString()
  ruc?: string;

  @ApiProperty({
    description: 'Tipo de la organización',
    type: String,
  })
  @IsString()
  type?: string;

  @ApiProperty({
    description: 'Año de la organización',
    type: String,
  })
  @IsString()
  year?: string;

  @ApiProperty({
    description: 'Dirección de la organización',
    type: String,
  })
  @IsString()
  direction?: string;

  @ApiProperty({
    description: 'Página web de la organización',
    type: String,
  })
  @IsString()
  web_page?: string;

  @ApiProperty({
    description: 'Correo electrónico de la organización',
    type: String,
  })
  @IsString()
  email?: string;

  @ApiProperty({
    description: 'Teléfono uno de la organización',
    type: String,
  })
  @IsString()
  phone_one?: string;

  @ApiProperty({
    description: 'Teléfono dos de la organización',
    type: String,
  })
  @IsString()
  phone_two?: string;

  @ApiProperty({
    description: 'Teléfono tres de la organización',
    type: String,
  })
  @IsString()
  phone_three?: string;

  @ApiProperty({
    description: 'Representante legal de la organización',
    type: String,
  })
  @IsString()
  representative_legal?: string;

  @ApiProperty({
    description: 'Correo electrónico del representante legal de la organización',
    type: String,
  })
  @IsString()
  representative_email?: string;

  @ApiProperty({
    description: 'Teléfono del representante legal de la organización',
    type: String,
  })
  @IsString()
  representative_phone?: string;

  @ApiProperty({
    description: 'Dirección del representante legal de la organización',
    type: String,
  })
  @IsString()
  representative_direction?: string;

  @ApiProperty({
    description: 'Estado de la organización',
    type: Boolean,
  })
  @IsBoolean()
  status?: boolean;

  @ApiProperty({
    description: 'Configuración en línea de la organización',
    type: Boolean,
  })
  @IsBoolean()
  config_online?: boolean;

  @ApiProperty({
    description: 'Caja abierta de la organización',
    type: Boolean,
  })
  @IsBoolean()
  open_cash?: boolean;

  @ApiProperty({
    description: 'Distrito de la organización',
    type: String,
  })
  @IsString()
  district?: string;

  @ApiProperty({
    description: 'Provincia de la organización',
    type: String,
  })
  @IsString()
  province?: string;

  @ApiProperty({
    description: 'Departamento de la organización',
    type: String,
  })
  @IsString()
  department?: string;

  @ApiProperty({
    description: 'Urbanización de la organización',
    type: String,
  })
  @IsString()
  urbanization?: string;

  @ApiProperty({
    description: 'Ubigeo de la organización',
    type: String,
  })
  @IsString()
  ubigeo?: string;

  @ApiProperty({
    description: 'País de la organización',
    type: String,
  })
  @IsString()
  country?: string;

  @ApiProperty({
    description: 'Nombre comercial de la organización',
    type: String,
  })
  @IsString()
  comercial_name?: string;

  @ApiProperty({
    description: 'Exonerado de la organización',
    type: Boolean,
  })
  @IsBoolean()
  exonerated?: boolean;

  @ApiProperty({
    description: 'Instagram de la organización',
    type: Boolean,
  })
  @IsString()
  instagram?: string;

  @ApiProperty({
    description: 'Facebook de la organización',
    type: Boolean,
  })
  @IsString()
  facebook?: string;

  @ApiProperty({
    description: 'Youtube de la organización',
    type: Boolean,
  })
  @IsString()
  youtube?: string;

  @ApiProperty({
    description: 'Whatsapp de la organización',
    type: Boolean,
  })
  @IsString()
  whatsapp?: string;

  @ApiProperty({
    description: 'Tiktok de la organización',
    type: Boolean,
  })
  @IsString()
  tiktok?: string;

  @ApiProperty({
    description: '¿Se puede editar precio?',
    type: Boolean,
  })
  @IsBoolean()
  edit_price?: boolean;

  @ApiProperty({
    description: '¿La organización tiene un footer?',
    type: Boolean,
  })
  @IsBoolean()
  footer?: boolean;

  @ApiProperty({
    description: '¿La organización tiene cuentas?',
    type: Boolean,
  })
  @IsBoolean()
  accounts?: boolean;

  @ApiProperty({
    description: 'Pie de pagina',
    type: Boolean,
  })
  @IsString()
  footer_description?: string;

  @ApiProperty({
    description: '¿La organización puede editar documentos?',
    type: Boolean,
  })
  @IsString()
  edit_documents?: string;

  @ApiProperty({
    description: '¿La organización tiene licencia?',
    type: Boolean,
  })
  @IsString()
  license?: string;

  @ApiProperty({
    description: '¿La organización tiene punto de venta?',
    type: Boolean,
  })
  @IsBoolean()
  point_sale: boolean;

  @ApiProperty({
    description: '¿La organización tiene tienda online?',
    type: Boolean,
  })
  @IsBoolean()
  store_online: boolean;

  @ApiProperty({
    description: '¿La organización tiene price_wholesale?',
    type: Boolean,
  })
  @IsBoolean()
  price_wholesale: boolean;

  @ApiProperty({
    description: '¿La organización tiene amount_wholesale?',
    type: Boolean,
  })
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
