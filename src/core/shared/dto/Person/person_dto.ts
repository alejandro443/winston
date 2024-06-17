import { OmitType } from '@nestjs/swagger';
import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { TypeDocuments } from '@src/infraestructure/shared/enums/TypesDocuments';
import { IsBoolean, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString, isNotIn } from 'class-validator';

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

  @ApiProperty({
    description: 'Fecha de nacimiento de la persona',
    type: Date,
  })
  @IsOptional()
  @IsDateString()
  birthdate?: Date;

  @ApiProperty({
    description: 'Correo electrónico de la persona',
    type: String,
  })
  @IsEmail()
  @IsOptional()
  main_email?: string;

  @ApiProperty({
    description: 'Teléfono principal de la persona',
    type: String,
  })
  @IsOptional()
  @IsString()
  main_phone?: string;

  @ApiProperty({
    description: 'Teléfonos secundarios de la persona',
    type: [String],
  })
  @IsOptional()
  @IsString()
  secondary_phone?: string[];

  @ApiProperty({
    description: 'Género de la persona',
    type: String,
  })
  @IsOptional()
  @IsString()
  gender?: string;

  @ApiProperty({
    description: 'Estado civil de la persona',
    type: String,
  })
  @IsOptional()
  @IsString()
  marital_status?: string;

  @ApiProperty({
    description: 'Ocupación de la persona',
    type: String,
  })
  @IsOptional()
  @IsString()
  occupation?: string;

  @ApiProperty({
    description: 'Nacionalidad de la persona',
    type: String,
  })
  @IsOptional()
  @IsString()
  nationality?: string;

  @ApiProperty({
    description: 'País de la persona',
    type: String,
  })
  @IsOptional()
  @IsString()
  country?: string;

  @ApiProperty({
    description: 'Departamento de la persona',
    type: String,
  })
  @IsOptional()
  @IsString()
  department?: string;

  @ApiProperty({
    description: 'Provincia de la persona',
    type: String,
  })
  @IsOptional()
  @IsString()
  province?: string;

  @ApiProperty({
    description: 'Distrito de la persona',
    type: String,
  })
  @IsOptional()
  @IsString()
  district?: string;

  @ApiProperty({
    description: 'Dirección de la persona',
    type: String,
  })
  @IsOptional()
  @IsString()
  direction?: string;

  @ApiProperty({
    description: 'Ubigeo de la persona',
    type: String,
  })
  @IsOptional()
  @IsString()
  ubigeo?: string;

  @ApiProperty({
    description: 'Foto de la persona',
    type: String,
  })
  @IsOptional()
  @IsString()
  photo?: string;

  @ApiProperty({
    description: 'Estado de la persona (Activo/Inactivo)',
    type: Boolean,
  })
  @IsOptional()
  @IsString()
  active?: boolean;

  @ApiProperty({
    description: 'Nombre comercial de la persona',
    type: String,
  })
  @IsOptional()
  @IsString()
  tradename?: string;

  @ApiProperty({
    description: 'Condición de la persona',
    type: String,
  })
  @IsOptional()
  @IsString()
  condition?: string;

  @ApiProperty({
    description: 'Placa de la persona',
    type: String,
  })
  @IsOptional()
  @IsString()
  plate?: string;

  @ApiProperty({
    description: 'Licencia de la persona',
    type: String,
  })
  @IsOptional()
  @IsString()
  licence?: string;

  @ApiProperty({
    description: 'Profesión de la persona',
    type: String,
  })
  @IsOptional()
  @IsString()
  profession?: string;

  @ApiProperty({
    description: 'Denominación de la persona',
    type: String,
  })
  @IsOptional()
  @IsString()
  denomination?: string;

  @ApiProperty({
    description: 'Régimen matrimonial de la persona',
    type: String,
  })
  @IsOptional()
  @IsString()
  married_regimen?: string;

  @ApiProperty({
    description: 'ID de la pareja de la persona',
    type: Number,
  })
  @IsOptional()
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

  @ApiProperty({
    description: 'Estado de la clasificación (Activo/Desactivado)',
    type: Boolean,
    default: true,
  })
  @IsOptional()
  @IsBoolean()
  status?: boolean;
  
  @ApiProperty({
    description: '¿Crear usuario y contraseña automaticamente?',
    type: Boolean,
    default: false,
  })
  @IsOptional()
  @IsBoolean()
  create_user?: boolean;

  @ApiProperty({
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