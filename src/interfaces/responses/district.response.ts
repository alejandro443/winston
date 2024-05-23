import { ApiProperty } from '@nestjs/swagger';
import { DistrictDto } from '@src/core/shared/dto/District/district_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class DistrictResponse extends AppResponse {
  @ApiProperty({
    type: DistrictDto,
    nullable: true,
  })
  data?: object;
}

export class DistrictsResponse extends AppResponse {
  @ApiProperty({
    type: [DistrictDto],
    nullable: true,
  })
  data?: DistrictDto[];
}
