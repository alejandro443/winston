import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
  OmitType,
  PartialType,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class WorkAreaDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id del tipo del suministro.',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre del area del trabajo.',
    type: String,
  })
  @IsString()
  name?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Descripción del area del trabajo.',
    type: String,
  })
  @IsString()
  description?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Código del area del trabajo.',
    type: String,
  })
  @IsString()
  code?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado del area del trabajo (Activo/Inactivo)',
    type: Boolean,
    default: true,
  })
  @IsBoolean()
  status?: boolean;

  @ApiResponseProperty({
    type: Date,
  })
  @IsOptional()
  @ApiPropertyOptional({
    description: 'Fecha de creación',
    type: Date,
  })
  created_at?: Date;
}
export class DeleteWorkAreaDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneWorkAreaDto extends PartialType(WorkAreaDto) { }
export class AllWorkAreaDto extends PartialType(WorkAreaDto) { }
export class NewWorkAreaDto extends OmitType(WorkAreaDto, ['id'] as const) { }
export class UpdateWorkAreaDto extends OmitType(WorkAreaDto, ['id'] as const) { }