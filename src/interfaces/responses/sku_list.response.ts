import { ApiProperty } from '@nestjs/swagger';
import { SkuListDto } from '@src/core/shared/dto/SkuList/sku_list_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class SkuListResponse extends AppResponse {
  @ApiProperty({
    type: SkuListDto,
    nullable: true,
  })
  data?: object;
}
