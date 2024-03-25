import { ApiProperty } from '@nestjs/swagger';

export class AppResponse {
  @ApiProperty()
  declare status: number;
  @ApiProperty()
  statusText?: string;
  @ApiProperty()
  message?: string;
  @ApiProperty()
  customMessage?: string;
}
