import {
  ApiProperty
} from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator';

export class RelatedDistrictsDto {
  @ApiProperty({
    description: 'Ubigeo del distrito.',
    type: Number,
  })
  @IsNumber()
  ubigeo?: number;

  @ApiProperty({
    description: 'Nombre del Departamento.',
    type: String,
  })
  @IsString()
  department?: string;

  @ApiProperty({
    description: 'Nombre de la Provincia.',
    type: String,
  })
  @IsString()
  province?: string;

  @ApiProperty({
    description: 'Nombre del Distrito.',
    type: String,
  })
  @IsString()
  district?: string;

  @ApiProperty({
    description: 'Altitud del distrito relacionado.',
    type: String,
  })
  @IsString()
  altitude?: string;
  
  @ApiProperty({
    description: 'Latitud del distrito relacionado.',
    type: String,
  })
  @IsString()
  latitude?: string;
  
  @ApiProperty({
    description: 'Longitud del distrito relacionado.',
    type: String,
  })
  @IsString()
  longitude?: string;
}