import { ApiProperty } from '@nestjs/swagger';

export class CreateClassificationRequestDto {
  @ApiProperty({
    description: 'Nombre de la clasificación',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'Codigo de la clasificación',
    type: String,
  })
  code: string;

  @ApiProperty({
    description: 'Descripcion de la clasificación',
    type: String,
  })
  description?: string;

  @ApiProperty({
    description: 'Estado de la clasificación (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  status?: boolean;
}
