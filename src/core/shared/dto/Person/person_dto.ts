import { ApiPropertyOptional, OmitType } from '@nestjs/swagger';
import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { TypeDocuments } from '@src/infraestructure/shared/enums/TypesDocuments';
import { IsBoolean, IsDateString, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

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
  last_name?: string;

  @ApiProperty({
    description: 'Identificación principal de la persona',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  main_identification?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Fecha de nacimiento de la persona',
    type: Date,
  })
  @IsDateString()
  birthdate?: Date;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Correo electrónico de la persona',
    type: String,
  })
  @IsEmail()
  main_email?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Teléfono principal de la persona',
    type: String,
  })
  @IsString()
  main_phone?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Teléfonos secundarios de la persona',
    type: [String],
  })
  @IsString()
  secondary_phone?: string[];

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Género de la persona',
    type: String,
  })
  @IsString()
  gender?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado civil de la persona',
    type: String,
  })
  @IsString()
  marital_status?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Ocupación de la persona',
    type: String,
  })
  @IsString()
  occupation?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Nacionalidad de la persona',
    type: String,
  })
  @IsString()
  nationality?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'País de la persona',
    type: String,
  })
  @IsString()
  country?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Departamento de la persona',
    type: String,
  })
  @IsString()
  department?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Provincia de la persona',
    type: String,
  })
  @IsString()
  province?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Distrito de la persona',
    type: String,
  })
  @IsString()
  district?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Dirección de la persona',
    type: String,
  })
  @IsString()
  direction?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Ubigeo de la persona',
    type: String,
  })
  @IsString()
  ubigeo?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Foto de la persona',
    type: String,
  })
  @IsString()
  photo?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado de la persona (Activo/Inactivo)',
    type: Boolean,
  })
  @IsString()
  active?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Nombre comercial de la persona',
    type: String,
  })
  @IsString()
  tradename?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Condición de la persona',
    type: String,
  })
  @IsString()
  condition?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Placa de la persona',
    type: String,
  })
  @IsString()
  plate?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Licencia de la persona',
    type: String,
  })
  @IsString()
  licence?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Profesión de la persona',
    type: String,
  })
  @IsString()
  profession?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Denominación de la persona',
    type: String,
  })
  @IsString()
  denomination?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Régimen matrimonial de la persona',
    type: String,
  })
  @IsString()
  married_regimen?: string;

  @IsOptional()
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

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado de la clasificación (Activo/Desactivado)',
    type: Boolean,
    default: true,
  })
  @IsBoolean()
  status?: boolean;

  @IsOptional()
  @ApiPropertyOptional({
    description: '¿Crear usuario y contraseña automaticamente?',
    type: Boolean,
    default: false,
  })
  @IsBoolean()
  create_user?: boolean;

  @IsOptional()
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

export class OnePersonDto extends OmitType(PersonDto, ['create_user'] as const) { }
export class AllPersonDto extends OmitType(PersonDto, ['create_user'] as const) { }
export class NewPersonDto extends OmitType(PersonDto, ['id'] as const) { }
export class UpdatePersonDto extends OmitType(PersonDto, ['id', 'create_user'] as const) { }