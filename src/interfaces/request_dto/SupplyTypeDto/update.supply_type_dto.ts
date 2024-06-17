import { OmitType } from '@nestjs/swagger';
import { SupplyTypeDto } from '@src/core/shared/dto/SupplyType/supply_type_dto';

export class UpdateSupplyTypeRequestDto extends
  OmitType(SupplyTypeDto, ['id', 'created_at'] as const) { }