import { ApiProperty } from '@nestjs/swagger';
import { SupplyDto } from '@src/core/shared/dto/Supply/supply_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class SupplyResponse extends AppResponse {
  @ApiProperty({
    type: SupplyDto,
    nullable: true,
  })
  data?: object;
}

export class SupplysResponse extends AppResponse {
  @ApiProperty({
    type: [SupplyDto],
    nullable: true,
  })
  data?: SupplyDto[];
}
