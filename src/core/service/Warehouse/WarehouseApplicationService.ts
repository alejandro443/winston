import { WarehouseApplication } from 'src/core/application/Warehouse/WarehouseApplication';
import {
  NewWarehouseDto,
  UpdateWarehouseDto,
} from 'src/core/shared/dto/Warehouse/warehouse_dto';
import { GetOneWarehouseUseCase } from './GetOneWarehouseUseCase';
import { GetAllWarehouseUseCase } from './GetAllWarehouseUseCase';
import { CreateWarehouseUseCase } from './CreateWarehouseUseCase';
import { UpdateWarehouseUseCase } from './UpdateWarehouseUseCase';
import { DeleteWarehouseUseCase } from './DeleteWarehouseUseCase';

export class WarehouseApplicationService
  implements WarehouseApplication
{
  constructor(
    private getOneUseCase?: GetOneWarehouseUseCase,
    private getAllUseCase?: GetAllWarehouseUseCase,
    private createUseCase?: CreateWarehouseUseCase,
    private updateUseCase?: UpdateWarehouseUseCase,
    private deleteUseCase?: DeleteWarehouseUseCase,
  ) {
    this.getOneUseCase = new GetOneWarehouseUseCase();
    this.getAllUseCase = new GetAllWarehouseUseCase();
    this.createUseCase = new CreateWarehouseUseCase();
    this.updateUseCase = new UpdateWarehouseUseCase();
    this.deleteUseCase = new DeleteWarehouseUseCase();
  }

  async getAllWarehouse() {
    try {
      return this.getAllUseCase?.getAllWarehouse();
    } catch (error: any) {
      return error;
    }
  }

  async getOneWarehouse(warehouse_id: number): Promise<any> {
    try {
      return this.getOneUseCase?.getOneWarehouse(warehouse_id);
    } catch (error: any) {
      return error;
    }
  }

  async createWarehouse(
    warehouse: NewWarehouseDto,
  ): Promise<any> {
    try {
      return this.createUseCase?.createWarehouse(warehouse);
    } catch (error: any) {
      return error;
    }
  }

  async updateWarehouse(
    warehouse_id: number,
    warehouse: UpdateWarehouseDto,
  ): Promise<any> {
    try {
      return this.updateUseCase?.updateWarehouse(warehouse_id, warehouse);
    } catch (error: any) {
      return error;
    }
  }

  async deleteWarehouse(warehouse_id: number) {
    try {
      return this.deleteUseCase?.deleteWarehouse(warehouse_id);
    } catch (error: any) {
      return error;
    }
  }
}
