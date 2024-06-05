import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
  OmitType,
  PartialType,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsString } from 'class-validator';

export class TypeChannelDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id del tipo del channel.',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre del tipo de channel.',
    type: String,
  })
  @IsString()
  name?: string;

  @ApiProperty({
    description: 'Descripción del tipo de channel.',
    type: String,
  })
  @IsString()
  description?: string;

  @ApiProperty({
    description: 'Código del tipo de channel.',
    type: String,
  })
  @IsString()
  code?: string;

  @ApiPropertyOptional({
    description: 'Estado del tipo de channel (Activo/Inactivo)',
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
export class DeleteTypeChannelDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneTypeChannelDto extends PartialType(TypeChannelDto) { }
export class AllTypeChannelDto extends PartialType(TypeChannelDto) { }
export class NewTypeChannelDto extends OmitType(TypeChannelDto, ['id'] as const) { }
export class UpdateTypeChannelDto extends OmitType(TypeChannelDto, ['id'] as const) { }