import { ApiProperty } from '@nestjs/swagger';

export class GetTypeWorkerRequestDto {
  @ApiProperty({
    description: 'Código del tipo de trabajo',
    type: String,
  })
  code: string;
}
