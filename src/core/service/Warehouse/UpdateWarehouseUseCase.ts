import { UpdateWarehouseDto } from 'src/core/shared/dto/Warehouse/warehouse_dto';
import { WarehouseService } from 'src/domain/services/WarehouseService/WarehouseService';

export class UpdateWarehouseUseCase {
  constructor(private warehouseService?: WarehouseService) {
    this.warehouseService = new WarehouseService();
  }

  async updateWarehouse(
    id: number,
    warehouse: UpdateWarehouseDto,
  ) {
    try {
      const response: any =
        await this.warehouseService?.updateWarehouse(
          id,
          warehouse,
        );
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
