import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
  OmitType,
  PartialType,
} from '@nestjs/swagger';
import { IsArray, IsBoolean, IsDateString, IsNumber, IsObject, IsOptional, IsString, ValidateNested } from 'class-validator';
import { PersonDto } from '../Person/person_dto';
import { Type } from 'class-transformer';

export class UserDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id del tipo de trabajador.',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Usuario.',
    type: String,
  })
  @IsString()
  user?: string;

  @ApiProperty({
    description: 'Contraseña.',
    type: String,
  })
  @IsString()
  password?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Codigo de usuario.',
    type: String,
  })
  @IsString()
  code?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: '¿El usuario es consultor CUDESI?.',
    type: Boolean,
    default: false,
  })
  @IsBoolean()
  @IsOptional()
  consultant?: boolean;

  @ApiProperty({
    description: 'Id de los roles asignados.',
    type: [Number],
  })
  @IsOptional()
  @IsArray()
  @IsNumber({}, { each: true })
  assigned_roles?: number[]

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado del usuario(Activo/Desactivado).',
    type: Boolean,
    default: true,
  })
  @IsBoolean()
  @IsOptional()
  status?: boolean;

  @ApiResponseProperty({
    type: Date,
  })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Fecha de creación',
    type: Date,
  })
  created_at?: Date;
}

export class DeleteUserDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneUserDto extends PartialType(UserDto) { }
export class AllUserDto extends PartialType(UserDto) { }
export class NewUserDto extends OmitType(UserDto, ['id'] as const) { }
export class UpdateUserDto extends OmitType(UserDto, ['id'] as const) { }
export class NewUserWithPersonDto extends OmitType(UserDto, ['id'] as const) {
  @ApiProperty({
    description: 'Datos de persona.',
    type: PersonDto,
  })
  @IsObject()
  @ValidateNested()
  @Type(() => PersonDto)
  person?: PersonDto;

  @ApiProperty({
    description: 'Id de las zonas asignadas.',
    type: [Number],
  })
  @IsArray()
  @IsOptional()
  @IsNumber({}, { each: true })
  zones?: [];

  @ApiProperty({
    description: 'Id de la posicion del trabajador. (Aún no esta implementado)',
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  worker_position?: number;

  @ApiProperty({
    description: 'Id del tipo de trabajador.',
    type: Number,
  })
  @IsOptional()
  @IsNumber()
  type_worker_id?: number
}