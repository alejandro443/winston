import { PickType } from '@nestjs/swagger';
import { WarehouseDto } from '@src/core/shared/dto/Warehouse/warehouse_dto';

export class GetWarehouseRequestDto extends PickType(WarehouseDto, ['id'] as const) { }
