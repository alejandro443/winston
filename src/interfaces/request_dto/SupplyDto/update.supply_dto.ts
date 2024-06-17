import { OmitType } from '@nestjs/swagger';
import { SupplyDto } from '@src/core/shared/dto/Supply/supply_dto';

export class UpdateSupplyRequestDto extends
OmitType(SupplyDto, ['id', 'created_at'] as const) { }