import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class BusinessSubcategoryDto {
  @ApiProperty({
    description: 'Id del sub giro de negocio',
    type: Number,
  })
  @ApiResponseProperty({
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre del sub giro de negocio',
    type: String,
  })
  @IsString()
  name?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Descripcion del sub giro de negocio',
    type: String,
  })
  @IsString()
  description?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Código del giro de negocio',
    type: Number,
  })
  @IsString()
  id_business_turn?: number;
 
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Nombre del giro de negocio',
    type: String,
  })
  @IsString()
  name_business_turn?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado del sub giro de negocio (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  status?: boolean;
}
export class DeleteBusinessSubcategoryDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneBusinessSubcategoryDto extends PartialType(BusinessSubcategoryDto) { }
export class AllBusinessSubcategoryDto extends PartialType(BusinessSubcategoryDto) { }
export class NewBusinessSubcategoryDto extends OmitType(BusinessSubcategoryDto, ['id'] as const) { }
export class UpdateBusinessSubcategoryDto extends OmitType(BusinessSubcategoryDto, ['id'] as const) { }