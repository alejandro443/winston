import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

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

  @ApiPropertyOptional({
    description: 'Tipo de la organización',
    type: String,
  })
  @IsString()
  type?: string;

  @ApiPropertyOptional({
    description: 'Año de la organización',
    type: String,
  })
  @IsString()
  year?: string;

  @ApiPropertyOptional({
    description: 'Dirección de la organización',
    type: String,
  })
  @IsString()
  direction?: string;

  @ApiPropertyOptional({
    description: 'Página web de la organización',
    type: String,
  })
  @IsString()
  web_page?: string;

  @ApiPropertyOptional({
    description: 'Correo electrónico de la organización',
    type: String,
  })
  @IsString()
  main_email?: string;

  @ApiPropertyOptional({
    description: 'Teléfono uno de la organización',
    type: String,
  })
  @IsString()
  phone_one?: string;

  @ApiPropertyOptional({
    description: 'Teléfono dos de la organización',
    type: String,
  })
  @IsString()
  phone_two?: string;

  @ApiPropertyOptional({
    description: 'Teléfono tres de la organización',
    type: String,
  })
  @IsString()
  phone_three?: string;

  @ApiPropertyOptional({
    description: 'Representante legal de la organización',
    type: String,
  })
  @IsString()
  representative_legal?: string;

  @ApiPropertyOptional({
    description:
      'Correo electrónico del representante legal de la organización',
    type: String,
  })
  @IsString()
  representative_email?: string;

  @ApiPropertyOptional({
    description: 'Teléfono del representante legal de la organización',
    type: String,
  })
  @IsString()
  representative_phone?: string;

  @ApiPropertyOptional({
    description: 'Dirección del representante legal de la organización',
    type: String,
  })
  @IsString()
  representative_direction?: string;

  @ApiPropertyOptional({
    description: 'Estado de la organización',
    type: Boolean,
    default: true,
  })
  @IsBoolean()
  status?: boolean;

  @ApiPropertyOptional({
    description: 'Configuración en línea de la organización',
    type: Boolean,
  })
  @IsBoolean()
  config_online?: boolean;

  @ApiPropertyOptional({
    description: 'Caja abierta de la organización',
    type: Boolean,
  })
  @IsBoolean()
  open_cash?: boolean;

  @ApiPropertyOptional({
    description: 'Distrito de la organización',
    type: String,
  })
  @IsString()
  district?: string;

  @ApiPropertyOptional({
    description: 'Provincia de la organización',
    type: String,
  })
  @IsString()
  province?: string;

  @ApiPropertyOptional({
    description: 'Departamento de la organización',
    type: String,
  })
  @IsString()
  department?: string;

  @ApiPropertyOptional({
    description: 'Urbanización de la organización',
    type: String,
  })
  @IsString()
  urbanization?: string;

  @ApiPropertyOptional({
    description: 'Ubigeo de la organización',
    type: String,
  })
  @IsString()
  ubigeo?: string;

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

  @ApiPropertyOptional({
    description: 'Exonerado de la organización',
    type: Boolean,
  })
  @IsBoolean()
  exonerated?: boolean;

  @ApiPropertyOptional({
    description: 'Instagram de la organización',
    type: Boolean,
  })
  @IsString()
  instagram?: string;

  @ApiPropertyOptional({
    description: 'Facebook de la organización',
    type: Boolean,
  })
  @IsString()
  facebook?: string;

  @ApiPropertyOptional({
    description: 'Youtube de la organización',
    type: Boolean,
  })
  @IsString()
  youtube?: string;

  @ApiPropertyOptional({
    description: 'Whatsapp de la organización',
    type: Boolean,
  })
  @IsString()
  whatsapp?: string;

  @ApiPropertyOptional({
    description: 'Tiktok de la organización',
    type: Boolean,
  })
  @IsString()
  tiktok?: string;

  @ApiPropertyOptional({
    description: '¿Se puede editar precio?',
    type: Boolean,
  })
  @IsBoolean()
  edit_price?: boolean;

  @ApiPropertyOptional({
    description: '¿La organización tiene un footer?',
    type: Boolean,
  })
  @IsBoolean()
  footer?: boolean;

  @ApiPropertyOptional({
    description: '¿La organización tiene cuentas?',
    type: Boolean,
  })
  @IsBoolean()
  accounts?: boolean;

  @ApiPropertyOptional({
    description: 'Pie de pagina',
    type: Boolean,
  })
  @IsString()
  footer_description?: string;

  @ApiPropertyOptional({
    description: '¿La organización puede editar documentos?',
    type: Boolean,
  })
  @IsString()
  edit_documents?: string;

  @ApiPropertyOptional({
    description: '¿La organización tiene licencia?',
    type: Boolean,
  })
  @IsString()
  license?: string;

  @ApiPropertyOptional({
    description: '¿La organización tiene punto de venta?',
    type: Boolean,
  })
  @IsBoolean()
  point_sale?: boolean;

  @ApiPropertyOptional({
    description: '¿La organización tiene tienda online?',
    type: Boolean,
  })
  @IsBoolean()
  store_online?: boolean;

  @ApiPropertyOptional({
    description: '¿La organización tiene price_wholesale?',
    type: Boolean,
  })
  @IsBoolean()
  price_wholesale?: boolean;

  @ApiPropertyOptional({
    description: '¿La organización tiene amount_wholesale?',
    type: Boolean,
  })
  @IsNumber()
  amount_wholesale?: number;

  @ApiPropertyOptional({
    description: 'Fecha de creacion.',
    type: Date,
  })
  @IsDateString()
  created_at?: Date;
}

export class DeleteOrganizationDto {
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