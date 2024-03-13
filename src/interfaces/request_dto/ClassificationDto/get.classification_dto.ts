import { ApiProperty } from '@nestjs/swagger';

export class GetClassificationRequestDto {
  @ApiProperty({
    description: 'Codigo de la clasificación',
    type: String,
  })
  code: string;
}
