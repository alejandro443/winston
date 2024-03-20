import { ApiProperty, ApiPropertyOptional, ApiResponseProperty } from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class TypeDocumentDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id del tipo de documento.',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre del tipo de documento',
    type: String,
  })
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Descripcion del tipo de documento',
    type: String,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Código del tipo de documento',
    type: String,
  })
  @IsString()
  code?: string;

  @ApiPropertyOptional({
    description: 'Estado del acceso (Activo/Inactivo)',
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
export class DeleteTypeDocumentDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export interface OneTypeDocumentDto extends TypeDocumentDto {}
export interface AllTypeDocumentDto extends TypeDocumentDto {}
export interface NewTypeDocumentDto extends Omit<TypeDocumentDto, 'id'> {}
export interface UpdateTypeDocumentDto extends Omit<TypeDocumentDto, 'id'> {}
