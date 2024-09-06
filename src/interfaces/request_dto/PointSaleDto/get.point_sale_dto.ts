import { PickType } from '@nestjs/swagger';
import { PointSaleDto } from '@src/core/shared/dto/PointSale/point_sale_dto';

export class GetPointSaleRequestDto extends PickType(PointSaleDto, ['id'] as const) { }
