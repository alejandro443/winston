import { NewSupplyTypeDto } from 'src/core/shared/dto/SupplyType/supply_type_dto';
import { SupplyTypeRepository } from 'src/domain/repositories/SupplyTypeRepository/SupplyTypeRepository';

export class SupplyTypeService {
  constructor(private repository?: SupplyTypeRepository) {
    this.repository = new SupplyTypeRepository();
  }

  async getOneSupplyType(code: string) {
    try {
      return this.repository?.findOne(code);
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

  async updateSupplyType(code: any, supply_type: NewSupplyTypeDto) {
    try {
      return this.repository?.update(code, supply_type);
    } catch (error: any) {
      return error;
    }
  }

  async deleteSupplyType(code: string) {
    try {
      return this.repository?.deleted(code);
    } catch (error: any) {
      return error;
    }
  }
}
