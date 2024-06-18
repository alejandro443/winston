import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class DepartmentDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiProperty({
    description: 'Id del departamento',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre del departamento',
    type: String,
  })
  @IsString()
  name?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Código ubigeo del departamento',
    type: String,
  })
  @IsString()
  cod_ubigeo?: string;

  @ApiProperty({
    description: 'Id del país al que pertenece el departamento',
    type: Number,
  })
  @IsNumber()
  country_id?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado del departamento (Activo/Inactivo)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  active?: boolean;
}

export class DeleteDepartmentDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export interface AllDepartmentDto extends DepartmentDto { }
export interface OneDepartmentDto extends DepartmentDto { }
export interface NewDepartmentDto extends Omit<DepartmentDto, 'id'> { }
export interface UpdateDepartmentDto extends Omit<DepartmentDto, 'id'> { }
