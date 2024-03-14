import { ApiProperty } from '@nestjs/swagger';

export class CreateWorkerRequestDto {
  @ApiProperty({
    description: 'Código del trabajador',
    type: String,
  })
  code?: string;

  @ApiProperty({
    description: 'Estado del trabajador (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  status?: boolean;

  @ApiProperty({
    description: 'ID del usuario asociado al trabajador',
    type: Number,
  })
  user_id?: number;

  @ApiProperty({
    description: 'Identificación de la persona asociada al trabajador',
    type: String,
  })
  person_identification?: string;

  @ApiProperty({
    description: 'Código del tipo de trabajador',
    type: String,
  })
  type_worker_code?: string;

  @ApiProperty({
    description: 'Código de clasificación del trabajador',
    type: String,
  })
  classification_code?: string;

  @ApiProperty({
    description: 'Código del grupo al que pertenece el trabajador',
    type: String,
  })
  group_code?: string;
}
