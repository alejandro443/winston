import { ApiProperty } from '@nestjs/swagger';

export class LoginRequestDto {
  @ApiProperty({
    description: 'Usuario de sistema',
    type: String,
  })
  user: string;

  @ApiProperty({
    description: 'Contraseña de sistema',
    type: String,
  })
  password: string;
}

export class LoginResponseDto {
  @ApiProperty({
    description: 'Código de usuario',
    type: String,
  })
  code: string;

  @ApiProperty({
    description: 'Nombre de rol de usuario',
    type: String,
  })
  rol: string;

  @ApiProperty({
    description: 'Sesión para el usuario',
    type: String,
  })
  session_id: string;

  @ApiProperty({
    description: 'Token para el usuario',
    type: String,
  })
  token: string;

  @ApiProperty({
    description: 'Accesos de el usuario',
    type: Object,
  })
  accesses: object;
}
