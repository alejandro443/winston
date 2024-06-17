import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class RolDto {
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
    description: 'Nombre del rol',
    type: String,
  })
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Descripción del rol',
    type: String,
  })
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Estado del rol (Activo/Inactivo)',
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

export class DeleteRolDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneRolDto extends PartialType(RolDto) { }
export class AllRolDto extends PartialType(RolDto) { }
export class NewRolDto extends OmitType(RolDto, ['id'] as const) { }
export class UpdateRolDto extends OmitType(RolDto, ['id'] as const) { }