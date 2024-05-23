import { ApiProperty } from '@nestjs/swagger';
import { RegionDto } from '@src/core/shared/dto/Region/region_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class RegionResponse extends AppResponse {
  @ApiProperty({
    type: RegionDto,
    nullable: true,
  })
  data?: object;
}

export class RegionsResponse extends AppResponse {
  @ApiProperty({
    type: [RegionDto],
    nullable: true,
  })
  data?: RegionDto[];
}
