import { WarehouseService } from 'src/domain/services/WarehouseService/WarehouseService';

export class GetOneWarehouseUseCase {
  constructor(private warehouseService?: WarehouseService) {
    this.warehouseService = new WarehouseService();
  }

  async getOneWarehouse(id: number) {
    try {
      const response: any =
        await this.warehouseService?.getOneWarehouse(id);
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
