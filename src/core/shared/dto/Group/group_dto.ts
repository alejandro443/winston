import { OmitType, PartialType } from '@nestjs/mapped-types';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
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
    description: 'Código del grupo.',
    type: String,
    writeOnly: true,
  })
  @IsString()
  code?: string;

  @ApiPropertyOptional({
    description: 'Estado del grupo (Activo/Inactivo)',
    type: Boolean,
    default: true,
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

export class OneGroupDto extends PartialType(GroupDto) { }
export class AllGroupDto extends PartialType(GroupDto) { }
export class NewGroupDto extends OmitType(GroupDto, ['id', 'created_at'] as const) { }
export class UpdateGroupDto extends OmitType(GroupDto, ['id', 'created_at'] as const) { }