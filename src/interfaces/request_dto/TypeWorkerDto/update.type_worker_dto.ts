import { ApiProperty } from '@nestjs/swagger';

export class UpdateTypeWorkerRequestDto {
  @ApiProperty({
    description: 'Nombre del tipo de trabajador',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'Descripcion del tipo de trabajador',
    type: String,
  })
  description: string;

  @ApiProperty({
    description: 'Estado del tipo de trabajador (Activo/Desactivado)',
    type: Boolean,
  })
  status: boolean;
}
