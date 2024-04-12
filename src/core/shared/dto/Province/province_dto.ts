import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

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

  @ApiProperty({
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

  @ApiProperty({
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

export interface AllProvinceDto extends ProvinceDto {}
export interface OneProvinceDto extends ProvinceDto {}
export interface NewProvinceDto extends Omit<ProvinceDto, 'id'> {}
export interface UpdateProvinceDto extends Omit<ProvinceDto, 'id'> {}
