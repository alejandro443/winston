import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
  PartialType,
} from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class IssuableDocumentDto {
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

  @ApiPropertyOptional({
    description: 'Descripción del tipo de documento',
    type: String,
  })
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    description: 'Código del tipo de documento',
    type: String,
  })
  @IsString()
  code?: string;

  @ApiPropertyOptional({
    description: 'Estado del tipo de documento (Activo/Inactivo)',
    type: Boolean,
    default: true,
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

export class AllIssuableDocumentDto extends PartialType(IssuableDocumentDto) { }