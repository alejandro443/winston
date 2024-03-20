import { ApiProperty } from '@nestjs/swagger';

export class GetUserRequestDto {
  @ApiProperty({
    description: 'Código de usuario',
    type: String,
  })
  code?: string;
}

export class GetUserResponseRequestDto {
  @ApiProperty({
    description: 'Id de usuario',
    type: Number,
  })
  id?: number;

  @ApiProperty({
    description: 'Usuario',
    type: String,
  })
  user?: string;

  @ApiProperty({
    description: 'Código de usuario',
    type: String,
  })
  code?: string;

  @ApiProperty({
    description: '¿Consultor CUDESI?',
    type: Boolean,
    default: false,
  })
  consultant?: boolean;

  @ApiProperty({
    description: 'Estado del usuario (Activo/Desactivado)',
    type: Boolean,
    default: true,
  })
  status?: boolean;
}
