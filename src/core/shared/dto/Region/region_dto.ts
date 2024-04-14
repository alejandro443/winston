import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class RegionDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiProperty({
    description: 'Id de la región',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre de la región',
    type: String,
  })
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Descripción de la región',
    type: String,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Estado de la región (Activo/Inactivo)',
    type: Boolean,
    default: true,
  })
  @IsBoolean()
  active?: boolean;
}

export class DeleteRegionDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export interface AllRegionDto extends RegionDto {}
export interface OneRegionDto extends RegionDto {}
export interface NewRegionDto extends Omit<RegionDto, 'id'> {}
export interface UpdateRegionDto extends Omit<RegionDto, 'id'> {}
