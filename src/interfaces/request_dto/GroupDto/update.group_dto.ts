import { ApiProperty } from '@nestjs/swagger';

export class UpdateGroupRequestDto {
  @ApiProperty({
    description: 'Nombre del grupo',
    type: String,
  })
  name: string;

  @ApiProperty({
    description: 'Descripcion del grupo',
    type: String,
  })
  description: string;

  @ApiProperty({
    description: 'Estado del grupo (Activo/Desactivado)',
    type: Boolean,
  })
  status: boolean;
}
