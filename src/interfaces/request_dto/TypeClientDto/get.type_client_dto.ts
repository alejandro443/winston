import { ApiProperty } from '@nestjs/swagger';

export class GetTypeClientRequestDto {
  @ApiProperty({
    description: 'Código del tipo de cliente',
    type: String,
  })
  code: string;
}
