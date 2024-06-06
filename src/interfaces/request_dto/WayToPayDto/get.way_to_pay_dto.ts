import { PickType } from '@nestjs/mapped-types';
import { WayToPayDto } from '@src/core/shared/dto/WayToPay/way_to_pay_dto';

export class GetWayToPayRequestDto extends PickType(WayToPayDto, ['code'] as const) { }