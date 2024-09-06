import { OmitType } from '@nestjs/swagger';
import { WarehouseDto } from '@src/core/shared/dto/Warehouse/warehouse_dto';

export class UpdateWarehouseRequestDto extends
  OmitType(WarehouseDto, ['id'] as const) { }