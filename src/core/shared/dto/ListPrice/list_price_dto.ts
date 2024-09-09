import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class ListPriceDto {
  @ApiProperty({
    description: 'Id del almacén',
    type: Number,
  })
  @ApiResponseProperty({
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre del almacén',
    type: String,
  })
  @IsString()
  name?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Descripcion del almacén',
    type: String,
  })
  @IsString()
  description?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Código del almacén',
    type: String,
  })
  @IsString()
  code?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado del almacén (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  status?: boolean;
}
export class DeleteListPriceDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneDto extends PartialType(ListPriceDto) { }
export class AllDto extends PartialType(ListPriceDto) { }
export class NewDto extends OmitType(ListPriceDto, ['id'] as const) { }
export class UpdateDto extends OmitType(ListPriceDto, ['id'] as const) { }