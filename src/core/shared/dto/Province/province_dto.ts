import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class ProvinceDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiProperty({
    description: 'Id de la provincia',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre de la provincia',
    type: String,
  })
  @IsString()
  name?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Código ubigeo de la provincia',
    type: String,
  })
  @IsString()
  cod_ubigeo?: string;

  @ApiProperty({
    description: 'ID del departamento al que pertenece la provincia',
    type: Number,
  })
  @IsNumber()
  department_id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado de la provincia (Activo/Inactivo)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  active?: boolean;
}

export class DeleteProvinceDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export interface AllProvinceDto extends ProvinceDto { }
export interface OneProvinceDto extends ProvinceDto { }
export interface NewProvinceDto extends Omit<ProvinceDto, 'id'> { }
export interface UpdateProvinceDto extends Omit<ProvinceDto, 'id'> { }
