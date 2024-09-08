import { ApiProperty } from '@nestjs/swagger';
import { PointSaleUserDto } from '@src/core/shared/dto/PointSaleUser/point_sale_user_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class PointSaleUserResponse extends AppResponse {
  @ApiProperty({
    type: PointSaleUserDto,
    nullable: true,
  })
  data?: object;
}

export class PointSaleUsersResponse extends AppResponse {
  @ApiProperty({
    type: [PointSaleUserDto],
    nullable: true,
  })
  data?: PointSaleUserDto[];
}
