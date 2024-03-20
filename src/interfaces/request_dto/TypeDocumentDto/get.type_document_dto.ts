import { ApiProperty } from '@nestjs/swagger';

export class GetTypeDocumentRequestDto {
  @ApiProperty({
    description: 'Código del tipo de documento',
    type: String,
  })
  code: string;
}
