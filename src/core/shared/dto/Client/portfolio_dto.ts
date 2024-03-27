import {
  ApiProperty,
  ApiPropertyOptional,
  ApiResponseProperty,
} from '@nestjs/swagger';
import { IsBoolean, IsNumber, IsString } from 'class-validator';

export class PortfolioDto {
  @ApiResponseProperty()
  @ApiPropertyOptional({
    description: 'Id del cliente',
    type: Number,
  })
  @IsNumber()
  declare client_id: number;

  @ApiResponseProperty()
  @ApiProperty({
    description: 'Código del cliente',
    type: String,
  })
  @IsString()
  declare client_code: string;

  @ApiResponseProperty()
  @ApiProperty({
    description: 'Nombre registrado del cliente',
    type: String,
  })
  @IsString()
  declare name: string;

  @ApiResponseProperty()
  @ApiProperty({
    description: 'Canal de entrada del cliente.',
    type: String,
  })
  @IsString()
  declare channel: string;

  @ApiResponseProperty()
  @ApiProperty({
    description: 'Categoria de cliente.',
    type: String,
  })
  @IsString()
  declare type_client: string;

  @ApiResponseProperty()
  @ApiProperty({
    description:
      'Esto es la entidad del cliente, si el cliente es una empresa o una persona.',
    type: String,
  })
  @IsString()
  declare type_entity: string;

  @ApiResponseProperty()
  @ApiProperty({
    description: 'Numero de telefono principal del cliente.',
    type: String,
  })
  @IsString()
  declare main_phone: string;

  @ApiResponseProperty()
  @ApiProperty({
    description: 'Dirección principal del cliente.',
    type: String,
  })
  @IsString()
  declare main_direction: string;

  @ApiResponseProperty()
  @ApiProperty({
    description: 'Dirección de correo principal del cliente.',
    type: String,
  })
  @IsString()
  declare main_email: string;

  @ApiResponseProperty()
  @ApiProperty({
    description: 'Numero de identificación del client.',
    type: String,
  })
  @IsString()
  declare main_identification: string;

  @ApiResponseProperty()
  @ApiProperty({
    description: 'Estado del cliente (Activo/Desactivado)',
    type: Boolean,
  })
  @IsBoolean()
  declare status: boolean;
}
