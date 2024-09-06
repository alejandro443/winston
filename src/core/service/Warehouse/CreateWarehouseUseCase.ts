import { WarehouseService } from 'src/domain/services/WarehouseService/WarehouseService';
import { NewWarehouseDto } from 'src/core/shared/dto/Warehouse/warehouse_dto';

export class CreateWarehouseUseCase {
  constructor(private warehouseService?: WarehouseService) {
    this.warehouseService = new WarehouseService();
  }

  async createWarehouse(warehouse: NewWarehouseDto) {
    try {
      const response: any =
        await this.warehouseService?.createWarehouse(warehouse);
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
