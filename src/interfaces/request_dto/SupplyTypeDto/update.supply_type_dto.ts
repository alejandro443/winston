import { OmitType } from '@nestjs/mapped-types';
import { SupplyTypeDto } from '@src/core/shared/dto/SupplyType/supply_type_dto';

export class UpdateSupplyTypeRequestDto extends
  OmitType(SupplyTypeDto, ['id', 'created_at'] as const) { }