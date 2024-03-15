import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrganizationRequestDto {

  @ApiProperty({
    description: 'Nombre de la organización',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'Sector de la organización',
    type: String,
  })
  sector: string;

  @ApiProperty({
    description: 'RUC de la organización',
    type: String,
  })
  ruc: string;

  @ApiProperty({
    description: 'Tipo de organización',
    type: String,
  })
  type: string;

  @ApiProperty({
    description: 'Año de fundación de la organización',
    type: String,
  })
  year: string;

  @ApiProperty({
    description: 'Dirección de la organización',
    type: String,
  })
  direction: string;

  @ApiProperty({
    description: 'Página web de la organización',
    type: String,
  })
  web_page: string;

  @ApiProperty({
    description: 'Correo electrónico de la organización',
    type: String,
  })
  email: string;

  @ApiProperty({
    description: 'Teléfono principal de la organización',
    type: String,
  })
  phone_one: string;

  @ApiProperty({
    description: 'Estado de la organización (Activo/Inactivo)',
    default: true,
    type: Boolean,
  })
  status: boolean;
}
