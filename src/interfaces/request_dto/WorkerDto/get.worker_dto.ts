import { ApiProperty } from '@nestjs/swagger';

export class GetWorkerRequestDto {
  @ApiProperty({
    description: 'Código del trabajador',
    type: String,
  })
  code: string;
}
