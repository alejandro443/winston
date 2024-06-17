import { PickType } from '@nestjs/swagger';
import { SupplyDto } from '@src/core/shared/dto/Supply/supply_dto';

export class GetSupplyRequestDto extends PickType(SupplyDto, ['id'] as const) { }