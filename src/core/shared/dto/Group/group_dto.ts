import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class GroupDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id del rol',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre del grupo.',
    type: String,
  })
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Descripción del grupo.',
    type: String,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Codigo del grupo.',
    type: String,
    writeOnly: true
  })
  @IsString()
  code?: string;

  @ApiPropertyOptional({
    description: 'Estado del grupo (Activo/Inactivo)',
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
export class DeleteGroupDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export interface OneGroupDto extends GroupDto {}
export interface AllGroupDto extends GroupDto {}
export interface NewGroupDto extends Omit<GroupDto, 'id'> {}
export interface UpdateGroupDto extends Omit<GroupDto, 'id'> {}
