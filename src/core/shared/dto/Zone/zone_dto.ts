import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { ArrayNotEmpty, ArrayUnique, IsArray, IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class ZoneDto {
  @ApiProperty({
    description: 'Id de la zona.',
    type: String,
  })
  @ApiResponseProperty({
    type: String,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre de la zona.',
    type: String,
  })
  @IsString()
  name?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Descripcion de la zona.',
    type: String,
  })
  @IsString()
  description?: string;

  @IsOptional()
  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @ApiPropertyOptional({
    description: 'Dias de entregas.',
    type: [String],
  })
  @IsString({ each: true })
  tags?: string[];

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado de la zona. (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  status?: boolean;
}
export class DeleteZoneDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneZoneDto extends PartialType(ZoneDto) { }
export class AllZoneDto extends PartialType(ZoneDto) { }
export class NewZoneDto extends OmitType(ZoneDto, ['id'] as const) { }
export class UpdateZoneDto extends OmitType(ZoneDto, ['id'] as const) { }