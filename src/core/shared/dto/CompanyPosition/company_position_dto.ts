import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
  OmitType,
  PartialType,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class CompanyPositionDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id del tipo del posicion.',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre del tipo de posicion.',
    type: String,
  })
  @IsString()
  name?: string;

  @ApiPropertyOptional({
    description: 'Descripción del tipo de posicion.',
    type: String,
  })
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Código del tipo de posicion.',
    type: String,
  })
  @IsString()
  code?: string;

  @ApiPropertyOptional({
    description: 'Estado del tipo de posicion (Activo/Inactivo)',
    type: Boolean,
    default: true,
  })
  @IsOptional()
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
export class DeleteCompanyPositionDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneCompanyPositionDto extends PartialType(CompanyPositionDto) { }
export class AllCompanyPositionDto extends PartialType(CompanyPositionDto) { }
export class NewCompanyPositionDto extends OmitType(CompanyPositionDto, ['id'] as const) { }
export class UpdateCompanyPositionDto extends OmitType(CompanyPositionDto, ['id'] as const) { }