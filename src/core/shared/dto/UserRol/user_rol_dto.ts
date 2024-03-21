import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber } from 'class-validator';

export class UserRolDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id del registro.',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiPropertyOptional({
    description: 'Id del rol.',
    type: Number,
  })
  @IsNumber()
  rol_id?: number;

  @ApiPropertyOptional({
    description: 'Id del usuario.',
    type: Number,
  })
  @IsNumber()
  user_id?: number;

  @ApiPropertyOptional({
    description: 'Estado del registro (Activo/Inactivo)',
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

export class DeleteUserRolDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export interface OneUserRolDto extends UserRolDto {}
export interface AllUserRolDto extends UserRolDto {}
export interface NewUserRolDto extends Omit<UserRolDto, 'id'> {}
export interface UpdateUserRolDto extends Omit<UserRolDto, 'id'> {}
