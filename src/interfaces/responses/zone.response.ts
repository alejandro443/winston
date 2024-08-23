import { ApiProperty } from '@nestjs/swagger';
import { ZoneDto } from '@src/core/shared/dto/Zone/zone_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class ZoneResponse extends AppResponse {
  @ApiProperty({
    type: ZoneDto,
    nullable: true,
  })
  data?: object;
}

export class ZonesResponse extends AppResponse {
  @ApiProperty({
    type: [ZoneDto],
    nullable: true,
  })
  data?: ZoneDto[];
}
