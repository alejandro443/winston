import { ApiProperty } from '@nestjs/swagger';

export class UpdateTypeClientRequestDto {
  @ApiProperty({
    description: 'Nombre del tipo de cliente',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'Descripcion del tipo de cliente',
    type: String,
  })
  description: string;

  @ApiProperty({
    description: 'Estado del tipo de cliente (Activo/Desactivado)',
    type: Boolean,
  })
  status: boolean;
}
