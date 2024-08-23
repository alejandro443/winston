import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { RelatedDistrictsMetaData } from '../../../../infraestructure/shared/interfaces/RelatedDistrictsMetaData';
import { Type } from 'class-transformer';
import { ArrayNotEmpty, ArrayUnique, IsArray, IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString, ValidateNested } from 'class-validator';
import { RelatedDistrictsDto } from '../RelatedDistricts/related_districts_dto';

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
  @IsNotEmpty()
  @IsString()
  name?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Referencia de la zona.',
    type: String,
  })
  @IsString()
  reference?: string;

  @IsArray()
  @ArrayNotEmpty()
  @ArrayUnique()
  @ApiProperty({
    description: 'Dias de entregas.',
    type: [String],
  })
  @IsNotEmpty()
  @IsString({ each: true })
  delivery_days?: string[];

  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  @Type(() => RelatedDistrictsDto)
  @ApiProperty({
    description: 'Zonas de entrega con sus respectivos días y horas.',
    type: [RelatedDistrictsDto],
  })
  @IsNotEmpty()
  districts?: RelatedDistrictsMetaData[];

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado de la zona. (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
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