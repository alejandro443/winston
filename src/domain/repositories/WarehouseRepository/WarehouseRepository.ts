import {
  NewWarehouseDto,
  UpdateWarehouseDto,
} from 'src/core/shared/dto/Warehouse/warehouse_dto';
import { Warehouse } from 'src/domain/entities/Warehouse.entity';

export class WarehouseRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return Warehouse.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return Warehouse.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(warehouse: NewWarehouseDto) {
    try {
      return Warehouse.create(warehouse);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: number, warehouse: UpdateWarehouseDto) {
    try {
      return Warehouse.update(warehouse, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return Warehouse.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
