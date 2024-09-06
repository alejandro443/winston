import { NewWarehouseDto } from 'src/core/shared/dto/Warehouse/warehouse_dto';
import { WarehouseRepository } from 'src/domain/repositories/WarehouseRepository/WarehouseRepository';

export class WarehouseService {
  constructor(private repository?: WarehouseRepository) {
    this.repository = new WarehouseRepository();
  }

  async getOneWarehouse(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      return error;
    }
  }

  async getAllWarehouse() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createWarehouse(warehouse: NewWarehouseDto) {
    try {
      return this.repository?.create(warehouse);
    } catch (error: any) {
      return error;
    }
  }

  async updateWarehouse(id: number, warehouse: NewWarehouseDto) {
    try {
      return this.repository?.update(id, warehouse);
    } catch (error: any) {
      return error;
    }
  }

  async deleteWarehouse(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      return error;
    }
  }
}
