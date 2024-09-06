import { WarehouseService } from 'src/domain/services/WarehouseService/WarehouseService';

export class DeleteWarehouseUseCase {
  constructor(private warehouseService?: WarehouseService) {
    this.warehouseService = new WarehouseService();
  }

  async deleteWarehouse(id: number) {
    try {
      const response: any =
        await this.warehouseService?.deleteWarehouse(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
