import { OmitType } from '@nestjs/swagger';
import { WayToPayDto } from '@src/core/shared/dto/WayToPay/way_to_pay_dto';

export class CreateWayToPayRequestDto extends
  OmitType(WayToPayDto, ['id', 'created_at'] as const) { }