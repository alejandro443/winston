import { ApiProperty } from '@nestjs/swagger';
import { WayToPayDto } from '@src/core/shared/dto/WayToPay/way_to_pay_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class WayToPayResponse extends AppResponse {
  @ApiProperty({
    type: WayToPayDto,
    nullable: true,
  })
  data?: object;
}

export class TypesChannelsResponse extends AppResponse {
  @ApiProperty({
    type: [WayToPayDto],
    nullable: true,
  })
  data?: WayToPayDto[];
}
