import { NewSupplyTypeDto } from 'src/core/shared/dto/SupplyType/supply_type_dto';
import { SupplyTypeRepository } from 'src/domain/repositories/SupplyTypeRepository/SupplyTypeRepository';

export class SupplyTypeService {
  constructor(private repository?: SupplyTypeRepository) {
    this.repository = new SupplyTypeRepository();
  }

  async getOneSupplyType(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      return error;
    }
  }

  async getAllSupplyType() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createSupplyType(supply_type: NewSupplyTypeDto) {
    try {
      return this.repository?.create(supply_type);
    } catch (error: any) {
      return error;
    }
  }

  async updateSupplyType(id: any, supply_type: NewSupplyTypeDto) {
    try {
      return this.repository?.update(id, supply_type);
    } catch (error: any) {
      return error;
    }
  }

  async deleteSupplyType(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      return error;
    }
  }
}
