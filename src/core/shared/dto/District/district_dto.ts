import { ApiProperty, ApiResponseProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class DistrictDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiProperty({
    description: 'Id del distrito',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre del distrito',
    type: String,
  })
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Código ubigeo del distrito',
    type: String,
  })
  @IsString()
  cod_ubigeo?: string;

  @ApiProperty({
    description: 'ID de la provincia a la que pertenece el distrito',
    type: Number,
  })
  @IsNumber()
  province_id?: number;

  @ApiProperty({
    description: 'Estado del distrito (Activo/Inactivo)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  active?: boolean;
}

export class DeleteDistrictDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export interface AllDistrictDto extends DistrictDto {}
export interface OneDistrictDto extends DistrictDto {}
export interface NewDistrictDto extends Omit<DistrictDto, 'id'> {}
export interface UpdateDistrictDto extends Omit<DistrictDto, 'id'> {}
