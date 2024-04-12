import { ApiProperty } from '@nestjs/swagger';
import { ProvinceDto } from '@src/core/shared/dto/Province/province_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class ProvinceResponse extends AppResponse {
  @ApiProperty({
    type: ProvinceDto,
    nullable: true,
  })
  data?: object;
}

export class ProvincesResponse extends AppResponse {
  @ApiProperty({
    type: [ProvinceDto],
    nullable: true,
  })
  data?: ProvinceDto[];
}
