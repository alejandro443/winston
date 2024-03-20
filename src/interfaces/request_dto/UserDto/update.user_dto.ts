import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserRequestDto {
  @ApiProperty({
    description: 'Usuario',
    type: String,
  })
  user: string;

  @ApiProperty({
    description: 'Contraseña del usuario',
    type: String,
  })
  password: string;

  @ApiProperty({
    description: '¿Consultor CUDESI?',
    type: Boolean,
    default: false,
  })
  consultant: boolean;

  @ApiProperty({
    description: 'Estado del usuario (Activo/Desactivado)',
    type: Boolean,
    default: true,
  })
  status: boolean;
}
