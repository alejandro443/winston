import { PickType } from '@nestjs/swagger';
import { PointSaleUserDto } from '@src/core/shared/dto/PointSaleUser/point_sale_user_dto';

export class GetRequestDto extends PickType(PointSaleUserDto, ['id'] as const) { }
