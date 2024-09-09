import { OmitType } from '@nestjs/swagger';
import { PointSaleDto } from 'src/core/shared/dto/PointSale/point_sale_dto';

  export class CreatePointSaleRequestDto extends
  OmitType(PointSaleDto, ['id'] as const) { }