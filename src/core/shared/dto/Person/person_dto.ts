import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class PersonDto {
  @ApiProperty({
    description: 'ID de la persona',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre de la persona',
    type: String,
  })
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Apellido de la persona',
    type: String,
  })
  @IsString()
  lastname?: string;

  @ApiProperty({
    description: 'Identificación principal de la persona',
    type: String,
  })
  @IsString()
  main_identification?: string;

  @ApiProperty({
    description: 'Fecha de nacimiento de la persona',
    type: Date,
  })
  @IsDateString()
  birthdate?: Date;

  @ApiProperty({
    description: 'Correo electrónico de la persona',
    type: String,
  })
  @IsString()
  email?: string;

  @ApiProperty({
    description: 'Teléfono principal de la persona',
    type: String,
  })
  @IsString()
  main_telephone?: string;

  @ApiProperty({
    description: 'Teléfonos secundarios de la persona',
    type: [String],
  })
  @IsString()
  secondary_phone?: string[];

  @ApiProperty({
    description: 'Género de la persona',
    type: String,
  })
  @IsString()
  gender?: string;

  @ApiProperty({
    description: 'Estado civil de la persona',
    type: String,
  })
  @IsString()
  marital_status?: string;

  @ApiProperty({
    description: 'Ocupación de la persona',
    type: String,
  })
  @IsString()
  occupation?: string;

  @ApiProperty({
    description: 'Nacionalidad de la persona',
    type: String,
  })
  @IsString()
  nationality?: string;

  @ApiProperty({
    description: 'País de la persona',
    type: String,
  })
  @IsString()
  country?: string;

  @ApiProperty({
    description: 'Departamento de la persona',
    type: String,
  })
  @IsString()
  department?: string;

  @ApiProperty({
    description: 'Provincia de la persona',
    type: String,
  })
  @IsString()
  province?: string;

  @ApiProperty({
    description: 'Distrito de la persona',
    type: String,
  })
  @IsString()
  district?: string;

  @ApiProperty({
    description: 'Dirección de la persona',
    type: String,
  })
  @IsString()
  direction?: string;

  @ApiProperty({
    description: 'Ubigeo de la persona',
    type: String,
  })
  @IsString()
  ubigeo?: string;

  @ApiProperty({
    description: 'Foto de la persona',
    type: String,
  })
  @IsString()
  photo?: string;

  @ApiProperty({
    description: 'Estado de la persona (Activo/Inactivo)',
    type: Boolean,
  })
  @IsString()
  active?: boolean;

  @ApiProperty({
    description: 'Nombre comercial de la persona',
    type: String,
  })
  @IsString()
  tradename?: string;

  @ApiProperty({
    description: 'Condición de la persona',
    type: String,
  })
  @IsString()
  condition?: string;

  @ApiProperty({
    description: 'Placa de la persona',
    type: String,
  })
  @IsString()
  plate?: string;

  @ApiProperty({
    description: 'Licencia de la persona',
    type: String,
  })
  @IsString()
  licence?: string;

  @ApiProperty({
    description: 'Profesión de la persona',
    type: String,
  })
  @IsString()
  profession?: string;

  @ApiProperty({
    description: 'Denominación de la persona',
    type: String,
  })
  @IsString()
  denomination?: string;

  @ApiProperty({
    description: 'Régimen matrimonial de la persona',
    type: String,
  })
  @IsString()
  married_regimen?: string;

  @ApiProperty({
    description: 'ID de la pareja de la persona',
    type: Number,
  })
  @IsNumber()
  couple_id?: number;

  @ApiProperty({
    description: 'Tipo de documento principal de la persona',
    type: String,
  })
  @IsString()
  main_document_type?: string;

  @ApiProperty({
    description: 'Estado de la clasificación (Activo/Desactivado)',
    type: Boolean,
    default: true,
  })
  @IsBoolean()
  status: boolean;
}

export class DeletePersonDto {
  @IsDateString()
  deleted_at?: Date;
}

export interface OnePersonDto extends PersonDto {}
export interface AllPersonDto extends PersonDto {}
export interface NewPersonDto extends Omit<PersonDto, 'id'> {}
export interface UpdatePersonDto extends Omit<PersonDto, 'id'> {}
