import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber } from 'class-validator';

export class UserAccessDto {
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
  access_id?: number;

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

export class DeleteUserAccessDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export interface OneUserAccessDto extends UserAccessDto {}
export interface AllUserAccessDto extends UserAccessDto {}
export interface NewUserAccessDto extends Omit<UserAccessDto, 'id'> {}
export interface UpdateUserAccessDto extends Omit<UserAccessDto, 'id'> {}
