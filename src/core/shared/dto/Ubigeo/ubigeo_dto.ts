import { ApiResponseProperty } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional
} from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class UbigeoDto {

  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id del ubigeo.',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Codigo de ubigeo.',
    type: Number,
  })
  @IsString()
  ubigeo?: number;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Nombre del departamento del ubigeo.',
    type: String,
  })
  @IsString()
  department?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Nombre de la provincia del ubigeo.',
    type: String,
  })
  @IsString()
  province?: string;
  
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Nombre del distrito del ubigeo.',
    type: String,
  })
  @IsString()
  district?: string;
  
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Altitud de la zona.',
    type: Number,
  })
  @IsNumber()
  altitud?: number;
  
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Latitud de la zona.',
    type: Number,
  })
  @IsNumber()
  latitud?: number;
  
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Longitud de la zona.',
    type: Number,
  })
  @IsNumber()
  longitud?: number;
  
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado del ubigeo.',
    type: Boolean,
  })
  @IsBoolean()
  status?: boolean;
}