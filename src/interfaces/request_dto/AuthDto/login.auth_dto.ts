import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class LoginRequestDto {
  @ApiProperty({
    description: 'Usuario de sistema',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  declare user: string;

  @ApiProperty({
    description: 'Contraseña de sistema',
    type: String,
  })
  @IsString()
  @IsNotEmpty()
  declare password: string;
}

export class LoginResponseDto {
  @ApiProperty({
    description: 'Código de usuario',
    type: String,
  })
  declare code: string;

  @ApiProperty({
    description: 'Nombre de rol de usuario',
    type: String,
  })
  declare rol: string;

  @ApiProperty({
    description: 'Sesión para el usuario',
    type: String,
  })
  declare session_id: string;

  @ApiProperty({
    description: 'Token para el usuario',
    type: String,
  })
  declare token: string;

  @ApiProperty({
    description: 'Accesos de el usuario',
    type: Object,
  })
  declare accesses: object;
}
