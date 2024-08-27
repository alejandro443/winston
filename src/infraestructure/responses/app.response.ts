import { ApiProperty } from '@nestjs/swagger';

export class AppResponse {
  @ApiProperty({ example: 0 })
  declare status: number;

  @ApiProperty({ example: 'string', nullable: true })
  statusText?: string;

  @ApiProperty({ example: 'string', nullable: true })
  message?: string;

  @ApiProperty({ example: 'string', nullable: true })
  customMessage?: string;
}
