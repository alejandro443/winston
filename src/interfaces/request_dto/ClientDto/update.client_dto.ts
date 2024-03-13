import { ApiProperty } from '@nestjs/swagger';

export class UpdateClientRequestDto {
  @ApiProperty({
    description: 'Código del cliente',
    type: String,
  })
  code?: string;

  @ApiProperty({
    description: 'Estado del cliente (Activo/Desactivado)',
    default: true,
    type: Boolean,
  })
  status?: boolean;

  @ApiProperty({
    description: 'ID del usuario asociado al cliente',
    type: Number,
  })
  user_id?: number;

  @ApiProperty({
    description: 'Identificación de la persona asociada al cliente',
    type: String,
  })
  person_identification?: string;

  @ApiProperty({
    description: 'Código del tipo de cliente',
    type: String,
  })
  type_client_code?: string;

  @ApiProperty({
    description: 'Código de clasificación del cliente',
    type: String,
  })
  classification_code?: string;

  @ApiProperty({
    description: 'Código del grupo al que pertenece el cliente',
    type: String,
  })
  group_code?: string;
}
