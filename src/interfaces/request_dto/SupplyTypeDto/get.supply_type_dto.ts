import { PickType } from '@nestjs/swagger';
import { SupplyTypeDto } from '@src/core/shared/dto/SupplyType/supply_type_dto';

export class GetSupplyTypeRequestDto extends PickType(SupplyTypeDto, ['id'] as const) { }