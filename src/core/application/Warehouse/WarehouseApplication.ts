import {
  AllWarehouseDto,
  NewWarehouseDto,
  OneWarehouseDto,
  UpdateWarehouseDto,
} from 'src/core/shared/dto/Warehouse/warehouse_dto';

export interface WarehouseApplication {
  getAllWarehouse(): Promise<Array<AllWarehouseDto>>;
  getOneWarehouse(id: number): Promise<OneWarehouseDto>;
  createWarehouse(
    warehouse: NewWarehouseDto,
  ): Promise<OneWarehouseDto>;
  updateWarehouse(
    id: number,
    warehouse: UpdateWarehouseDto,
  ): Promise<OneWarehouseDto>;
  deleteWarehouse(id: number): any;
}
