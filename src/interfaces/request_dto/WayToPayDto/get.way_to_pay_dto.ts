import { PickType } from '@nestjs/swagger';
import { WayToPayDto } from '@src/core/shared/dto/WayToPay/way_to_pay_dto';

export class GetWayToPayRequestDto extends PickType(WayToPayDto, ['id'] as const) { }