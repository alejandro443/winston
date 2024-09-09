import {
  NewSupplyTypeDto,
  UpdateSupplyTypeDto,
} from 'src/core/shared/dto/SupplyType/supply_type_dto';
import { SupplyType } from 'src/domain/entities/SupplyType.entity';

export class SupplyTypeRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return SupplyType.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return SupplyType.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(supply_type: NewSupplyTypeDto) {
    try {
      return SupplyType.create(supply_type);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: any, supply_type: UpdateSupplyTypeDto) {
    try {
      return SupplyType.update(supply_type, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return SupplyType.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
