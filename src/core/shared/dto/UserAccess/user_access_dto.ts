import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
  OmitType,
  PartialType,
} from '@nestjs/swagger';
import { IsBoolean, IsDateString, IsNumber } from 'class-validator';

export class UserAccessDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiPropertyOptional({
    description: 'Id del registro.',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @ApiPropertyOptional({
    description: 'Id del rol.',
    type: Number,
  })
  @IsNumber()
  access_id?: number;

  @ApiPropertyOptional({
    description: 'Id del usuario.',
    type: Number,
  })
  @IsNumber()
  user_id?: number;

  @ApiPropertyOptional({
    description: 'Estado del registro (Activo/Inactivo)',
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

export class DeleteUserAccessDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export class OneUserAccessDto extends PartialType(UserAccessDto) { }
export class AllUserAccessDto extends PartialType(UserAccessDto) { }
export class NewUserAccessDto extends OmitType(UserAccessDto, ['id'] as const) { }
export class UpdateUserAccessDto extends OmitType(UserAccessDto, ['id'] as const) { }