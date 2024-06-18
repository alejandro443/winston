import { ApiPropertyOptional, OmitType } from '@nestjs/swagger';
import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { TypeDocuments } from '@src/infraestructure/shared/enums/TypesDocuments';
import { IsBoolean, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PersonDto {
  @ApiProperty({
    description: 'ID de la persona',
    type: Number,
  })
  @ApiResponseProperty({
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre de la persona',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  name?: string;

  @ApiProperty({
    description: 'Apellido de la persona',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  lastname?: string;

  @ApiProperty({
    description: 'Identificación principal de la persona',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  main_identification?: string;

  @ApiPropertyOptional({
    description: 'Fecha de nacimiento de la persona',
    type: Date,
  })
  @IsDateString()
  birthdate?: Date;

  @ApiPropertyOptional({
    description: 'Correo electrónico de la persona',
    type: String,
  })
  @IsEmail()
  main_email?: string;

  @ApiPropertyOptional({
    description: 'Teléfono principal de la persona',
    type: String,
  })
  @IsString()
  main_phone?: string;

  @ApiPropertyOptional({
    description: 'Teléfonos secundarios de la persona',
    type: [String],
  })
  @IsString()
  secondary_phone?: string[];

  @ApiPropertyOptional({
    description: 'Género de la persona',
    type: String,
  })
  @IsString()
  gender?: string;

  @ApiPropertyOptional({
    description: 'Estado civil de la persona',
    type: String,
  })
  @IsString()
  marital_status?: string;

  @ApiPropertyOptional({
    description: 'Ocupación de la persona',
    type: String,
  })
  @IsString()
  occupation?: string;

  @ApiPropertyOptional({
    description: 'Nacionalidad de la persona',
    type: String,
  })
  @IsString()
  nationality?: string;

  @ApiPropertyOptional({
    description: 'País de la persona',
    type: String,
  })
  @IsString()
  country?: string;

  @ApiPropertyOptional({
    description: 'Departamento de la persona',
    type: String,
  })
  @IsString()
  department?: string;

  @ApiPropertyOptional({
    description: 'Provincia de la persona',
    type: String,
  })
  @IsString()
  province?: string;

  @ApiPropertyOptional({
    description: 'Distrito de la persona',
    type: String,
  })
  @IsString()
  district?: string;

  @ApiPropertyOptional({
    description: 'Dirección de la persona',
    type: String,
  })
  @IsString()
  direction?: string;

  @ApiPropertyOptional({
    description: 'Ubigeo de la persona',
    type: String,
  })
  @IsString()
  ubigeo?: string;

  @ApiPropertyOptional({
    description: 'Foto de la persona',
    type: String,
  })
  @IsString()
  photo?: string;

  @ApiPropertyOptional({
    description: 'Estado de la persona (Activo/Inactivo)',
    type: Boolean,
  })
  @IsString()
  active?: boolean;

  @ApiPropertyOptional({
    description: 'Nombre comercial de la persona',
    type: String,
  })
  @IsString()
  tradename?: string;

  @ApiPropertyOptional({
    description: 'Condición de la persona',
    type: String,
  })
  @IsString()
  condition?: string;

  @ApiPropertyOptional({
    description: 'Placa de la persona',
    type: String,
  })
  @IsString()
  plate?: string;

  @ApiPropertyOptional({
    description: 'Licencia de la persona',
    type: String,
  })
  @IsString()
  licence?: string;

  @ApiPropertyOptional({
    description: 'Profesión de la persona',
    type: String,
  })
  @IsString()
  profession?: string;

  @ApiPropertyOptional({
    description: 'Denominación de la persona',
    type: String,
  })
  @IsString()
  denomination?: string;

  @ApiPropertyOptional({
    description: 'Régimen matrimonial de la persona',
    type: String,
  })
  @IsString()
  married_regimen?: string;

  @ApiPropertyOptional({
    description: 'ID de la pareja de la persona',
    type: Number,
  })
  @IsNumber()
  couple_id?: number;

  @ApiProperty({
    description: 'Tipo de documento principal de la persona',
    type: String,
    enum: TypeDocuments
  })
  @IsNotEmpty()
  @IsEnum(TypeDocuments)
  type_identification?: string;

  @ApiPropertyOptional({
    description: 'Estado de la clasificación (Activo/Desactivado)',
    type: Boolean,
    default: true,
  })
  @IsBoolean()
  status?: boolean;
  
  @ApiPropertyOptional({
    description: '¿Crear usuario y contraseña automaticamente?',
    type: Boolean,
    default: false,
  })
  @IsBoolean()
  create_user?: boolean;

  @ApiPropertyOptional({
    description: 'Fecha de creacion',
    type: Date,
  })
  @ApiResponseProperty()
  @IsDateString()
  created_at?: Date;
}

export class DeletePersonDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OnePersonDto extends OmitType(PersonDto, ['create_user'] as const) {}
export class AllPersonDto extends OmitType(PersonDto, ['create_user'] as const) {}
export class NewPersonDto extends OmitType(PersonDto, ['id'] as const) {}
export class UpdatePersonDto extends OmitType(PersonDto, ['id','create_user'] as const) {}