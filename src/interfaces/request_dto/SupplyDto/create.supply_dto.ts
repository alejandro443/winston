import { OmitType } from '@nestjs/mapped-types';
import { SupplyDto } from '@src/core/shared/dto/Supply/supply_dto';

export class CreateSupplyRequestDto extends
  OmitType(SupplyDto, ['id', 'created_at'] as const) { }