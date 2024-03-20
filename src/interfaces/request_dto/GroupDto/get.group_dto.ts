import { ApiProperty } from '@nestjs/swagger';

export class GetGroupRequestDto {
  @ApiProperty({
    description: 'Código del grupo',
    type: String,
  })
  code: string;
}
