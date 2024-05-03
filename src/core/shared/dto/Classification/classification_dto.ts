import { OmitType, PartialType } from '@nestjs/mapped-types';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class ClassificationDto {
  @ApiProperty({
    description: 'Id de la clasificación',
    type: String,
  })
  @ApiResponseProperty({
    type: String,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre de la clasificación',
    type: String,
  })
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Descripcion de la clasificación',
    type: String,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Código de la clasificación',
    type: String,
  })
  @IsString()
  code?: string;

  @ApiPropertyOptional({
    description: 'Estado de la clasificación (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  status?: boolean;
}
export class DeleteClassificationDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneClassificationDto extends PartialType(ClassificationDto) {}
export class AllClassificationDto extends PartialType(ClassificationDto) {}
export class NewClassificationDto extends OmitType(ClassificationDto, ['id'] as const) {}
export class UpdateClassificationDto extends OmitType(ClassificationDto, ['id'] as const) {}