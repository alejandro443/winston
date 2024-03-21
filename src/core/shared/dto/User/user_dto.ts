import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

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

  @ApiPropertyOptional({
    description: 'Usuario.',
    type: String,
  })
  @IsString()
  user?: string;

  @ApiPropertyOptional({
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
    default: false
  })
  @IsString()
  consultant?: boolean;

  @ApiPropertyOptional({
    description: 'Estado del usuario(Activo/Desactivado).',
    type: Boolean,
    default: true
  })
  @IsBoolean()
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

export interface OneUserDto extends UserDto {}
export interface AllUserDto extends UserDto {}
export interface NewUserDto extends Omit<UserDto, 'id'> {}
export interface UpdateUserDto extends Omit<UserDto, 'id'> {}
