import { OmitType } from '@nestjs/swagger';
import { WayToPayDto } from '@src/core/shared/dto/WayToPay/way_to_pay_dto';

export class UpdateWayToPayRequestDto extends
  OmitType(WayToPayDto, ['code', 'created_at'] as const) { }