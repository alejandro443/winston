import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class TypeClientDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id del tipo del cliente.',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre del tipo de cliente.',
    type: String,
  })
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Descripción del tipo de cliente.',
    type: String,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Código del tipo de cliente.',
    type: String,
  })
  @IsString()
  code?: string;

  @ApiPropertyOptional({
    description: 'Estado del tipo de cliente (Activo/Inactivo)',
    type: Boolean,
    default: true
  })
  @IsBoolean()
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
export class DeleteTypeClientDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export interface OneTypeClientDto extends TypeClientDto {}
export interface AllTypeClientDto extends TypeClientDto {}
export interface NewTypeClientDto extends Omit<TypeClientDto, 'id'> {}
export interface UpdateTypeClientDto extends Omit<TypeClientDto, 'id'> {}
