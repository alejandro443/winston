import { ApiProperty } from '@nestjs/swagger';
import { CompanyPositionDto } from '@src/core/shared/dto/CompanyPosition/company_position_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class CompanyPositionResponse extends AppResponse {
  @ApiProperty({
    type: CompanyPositionDto,
    nullable: true,
  })
  data?: object;
}

export class TypesChannelsResponse extends AppResponse {
  @ApiProperty({
    type: [CompanyPositionDto],
    nullable: true,
  })
  data?: CompanyPositionDto[];
}
