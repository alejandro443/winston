import { PickType } from '@nestjs/mapped-types';
import { SupplyTypeDto } from '@src/core/shared/dto/SupplyType/supply_type_dto';

export class GetSupplyTypeRequestDto extends PickType(SupplyTypeDto, ['code'] as const) { }