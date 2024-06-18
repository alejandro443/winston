import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
  OmitType,
  PartialType,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

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

  @ApiPropertyOptional({
    description: 'Codigo de usuario.',
    type: String,
  })
  @IsString()
  code?: string;

  @ApiPropertyOptional({
    description: '¿El usuario es consultor CUDESI?.',
    type: Boolean,
    default: false,
  })
  @IsString()
  @IsOptional()
  consultant?: boolean;

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