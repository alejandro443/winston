import { OmitType, PartialType } from '@nestjs/swagger';
import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber, IsOptional, IsString } from 'class-validator';

export class BusinessTurnDto {
  @ApiProperty({
    description: 'Id del giro de negocio',
    type: String,
  })
  @ApiResponseProperty({
    type: String,
  })
  @IsNumber()
  id?: number;

  @ApiProperty({
    description: 'Nombre del giro de negocio',
    type: String,
  })
  @IsString()
  name?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Descripcion del giro de negocio',
    type: String,
  })
  @IsString()
  description?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Código del giro de negocio',
    type: String,
  })
  @IsString()
  code?: string;

  @IsOptional()
  @ApiPropertyOptional({
    description: 'Estado del giro de negocio (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  @IsBoolean()
  status?: boolean;
}
export class DeleteBusinessTurnDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneBusinessTurnDto extends PartialType(BusinessTurnDto) { }
export class AllBusinessTurnDto extends PartialType(BusinessTurnDto) { }
export class NewBusinessTurnDto extends OmitType(BusinessTurnDto, ['id'] as const) { }
export class UpdateBusinessTurnDto extends OmitType(BusinessTurnDto, ['id'] as const) { }