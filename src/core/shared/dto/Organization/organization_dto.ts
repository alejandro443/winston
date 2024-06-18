import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class OrganizationDto {
  @ApiProperty({
    description: 'ID de la organización',
    type: Number,
  })
  @ApiResponseProperty({
    type: Number,
  })
  @IsNumber()
  id?: number;

  @IsOptional()
  @ApiPropertyOptional({
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

  @IsOptional()
  @ApiPropertyOptional({
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

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Tipo de la organización',
    type: String,
  })
  @IsString()
  type?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Año de la organización',
    type: String,
  })
  @IsString()
  year?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Dirección de la organización',
    type: String,
  })
  @IsString()
  direction?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Página web de la organización',
    type: String,
  })
  @IsString()
  web_page?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Correo electrónico de la organización',
    type: String,
  })
  @IsString()
  main_email?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Teléfono uno de la organización',
    type: String,
  })
  @IsString()
  phone_one?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Teléfono dos de la organización',
    type: String,
  })
  @IsString()
  phone_two?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Teléfono tres de la organización',
    type: String,
  })
  @IsString()
  phone_three?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Representante legal de la organización',
    type: String,
  })
  @IsString()
  representative_legal?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description:
      'Correo electrónico del representante legal de la organización',
    type: String,
  })
  @IsString()
  representative_email?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Teléfono del representante legal de la organización',
    type: String,
  })
  @IsString()
  representative_phone?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Dirección del representante legal de la organización',
    type: String,
  })
  @IsString()
  representative_direction?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado de la organización',
    type: Boolean,
    default: true,
  })
  @IsBoolean()
  status?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Configuración en línea de la organización',
    type: Boolean,
  })
  @IsBoolean()
  config_online?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Caja abierta de la organización',
    type: Boolean,
  })
  @IsBoolean()
  open_cash?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Distrito de la organización',
    type: String,
  })
  @IsString()
  district?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Provincia de la organización',
    type: String,
  })
  @IsString()
  province?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Departamento de la organización',
    type: String,
  })
  @IsString()
  department?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Urbanización de la organización',
    type: String,
  })
  @IsString()
  urbanization?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Ubigeo de la organización',
    type: String,
  })
  @IsString()
  ubigeo?: string;

  @IsOptional()
  @ApiPropertyOptional({
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

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Exonerado de la organización',
    type: Boolean,
  })
  @IsBoolean()
  exonerated?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Instagram de la organización',
    type: Boolean,
  })
  @IsString()
  instagram?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Facebook de la organización',
    type: Boolean,
  })
  @IsString()
  facebook?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Youtube de la organización',
    type: Boolean,
  })
  @IsString()
  youtube?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Whatsapp de la organización',
    type: Boolean,
  })
  @IsString()
  whatsapp?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Tiktok de la organización',
    type: Boolean,
  })
  @IsString()
  tiktok?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: '¿Se puede editar precio?',
    type: Boolean,
  })
  @IsBoolean()
  edit_price?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: '¿La organización tiene un footer?',
    type: Boolean,
  })
  @IsBoolean()
  footer?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: '¿La organización tiene cuentas?',
    type: Boolean,
  })
  @IsBoolean()
  accounts?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Pie de pagina',
    type: Boolean,
  })
  @IsString()
  footer_description?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: '¿La organización puede editar documentos?',
    type: Boolean,
  })
  @IsString()
  edit_documents?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: '¿La organización tiene licencia?',
    type: Boolean,
  })
  @IsString()
  license?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: '¿La organización tiene punto de venta?',
    type: Boolean,
  })
  @IsBoolean()
  point_sale?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: '¿La organización tiene tienda online?',
    type: Boolean,
  })
  @IsBoolean()
  store_online?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: '¿La organización tiene price_wholesale?',
    type: Boolean,
  })
  @IsBoolean()
  price_wholesale?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: '¿La organización tiene amount_wholesale?',
    type: Boolean,
  })
  @IsNumber()
  amount_wholesale?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Fecha de creacion.',
    type: Date,
  })
  @IsDateString()
  created_at?: Date;
}

export class DeleteOrganizationDto {
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneOrganizationDto extends PartialType(OrganizationDto) { }
export class AllOrganizationDto extends PartialType(OrganizationDto) { }
export class NewOrganizationDto extends OmitType(OrganizationDto, ['id', 'created_at'] as const) { }
export class UpdateOrganizationDto extends OmitType(OrganizationDto, ['id', 'created_at'] as const) { }