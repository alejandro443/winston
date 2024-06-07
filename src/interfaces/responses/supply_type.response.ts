import { ApiProperty } from '@nestjs/swagger';
import { SupplyTypeDto } from '@src/core/shared/dto/SupplyType/supply_type_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class SupplyTypeResponse extends AppResponse {
  @ApiProperty({
    type: SupplyTypeDto,
    nullable: true,
  })
  data?: object;
}

export class SupplyTypesResponse extends AppResponse {
  @ApiProperty({
    type: [SupplyTypeDto],
    nullable: true,
  })
  data?: SupplyTypeDto[];
}
