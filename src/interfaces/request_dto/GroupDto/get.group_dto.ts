import { ApiProperty } from '@nestjs/swagger';

export class GetGroupRequestDto {
  @ApiProperty({
    description: 'Codigo del grupo',
    type: String,
  })
  code: string;
}
