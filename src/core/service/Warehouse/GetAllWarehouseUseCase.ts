import { WarehouseService } from 'src/domain/services/WarehouseService/WarehouseService';

export class GetAllWarehouseUseCase {
  constructor(private warehouseService?: WarehouseService) {
    this.warehouseService = new WarehouseService();
  }

  async getAllWarehouse() {
    try {
      const response: any =
        await this.warehouseService?.getAllWarehouse();

      return response.map((warehouse: any) => ({
        id: warehouse.id,
        code: warehouse.code,
        name: warehouse.name,
        description: warehouse.description,
        status: warehouse.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
