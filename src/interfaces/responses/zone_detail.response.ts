import { ApiProperty } from '@nestjs/swagger';
import { ZoneDetailDto } from '@src/core/shared/dto/ZoneDetail/zone_detail_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class ZoneDetailsResponse extends AppResponse {
  @ApiProperty({
    type: [ZoneDetailDto],
    nullable: true,
  })
  data?: ZoneDetailDto[];
}
