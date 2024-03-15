import { ApiProperty } from '@nestjs/swagger';
import { INTEGER } from 'sequelize';

export class GetOrganizationRequestDto {
  @ApiProperty({
    description: 'Id de la organización',
    type: INTEGER,
  })
  id: number;
}
