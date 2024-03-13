import { ApiProperty } from '@nestjs/swagger';

export class CreateRolRequestDto {
  @ApiProperty({
    description: 'Nombre rol',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'Descripcion rol',
    type: String,
  })
  description: string;

  @ApiProperty({
    description: 'Estado del rol (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  status: boolean;
}
