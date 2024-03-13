import { ApiProperty } from '@nestjs/swagger';

export class GetTypeDocumentRequestDto {
  @ApiProperty({
    description: 'Codigo del tipo de documento',
    type: String,
  })
  code: string;
}
