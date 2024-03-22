import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { createApiPropertyDecorator } from '@nestjs/swagger/dist/decorators/api-property.decorator';
import { IsBoolean, IsDateString, IsNumber } from 'class-validator';

export class AccessRolDto {
  @ApiResponseProperty({
    type: Number,
  })
  @ApiProperty({
    description: 'Id del registro.',
    type: Number,
  })
  @IsNumber()
  id?: number;

  @createApiPropertyDecorator({
    description: 'Id del rol del registro.',
    type: Number,
  })
  @ApiProperty({
    description: 'Id del rol del registro.',
    type: Number,
  })
  @IsNumber()
  rol_id?: number;

  @ApiProperty({
    description: 'Id del access del registro.',
    type: Number,
  })
  @IsNumber()
  access_id?: number;

  @ApiPropertyOptional({
    description: 'Estado del registro',
    type: Number,
    default: true,
  })
  @IsBoolean()
  status?: boolean;
}

export class DeleteAccessRolDto {
  @ApiProperty({
    description: 'Fecha de eliminación',
    type: Date,
  })
  @IsDateString()
  deleted_at?: Date;
}

export interface OneAccessRolDto extends AccessRolDto {}
export interface AllAccessRolDto extends AccessRolDto {}
export interface NewAccessRolDto extends Omit<AccessRolDto, 'id'> {}
export interface UpdateAccessRolDto extends Omit<AccessRolDto, 'id'> {}
