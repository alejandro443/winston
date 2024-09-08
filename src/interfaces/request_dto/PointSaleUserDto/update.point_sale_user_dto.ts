import { OmitType } from '@nestjs/swagger';
import { PointSaleUserDto } from '@src/core/shared/dto/PointSaleUser/point_sale_user_dto';

export class UpdateRequestDto extends
  OmitType(PointSaleUserDto, ['id'] as const) { }