import { ApiProperty } from '@nestjs/swagger';

export class GetTypeClientRequestDto {
  @ApiProperty({
    description: 'Codigo del tipo de cliente',
    type: String,
  })
  code: string;
}
