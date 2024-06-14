import {
  NewSupplyDto,
  UpdateSupplyDto,
} from 'src/core/shared/dto/Supply/supply_dto';
import { Supply } from 'src/domain/entities/Supply.entity';

export class SupplyRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      const supply_data: any = await Supply.findOne({ where: { id: id } });
      return supply_data;
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      const supply_data: any = await Supply.findAll({ where: { deleted_at: null } });
      return supply_data;
    } catch (error: any) {
      return error;
    }
  }

  async create(supply: NewSupplyDto) {
    try {
      const supply_data: any = await Supply.create(supply);
      return supply_data;
    } catch (error: any) {
      return error;
    }
  }

  async update(id: number, supply: UpdateSupplyDto) {
    try {
      const supply_data: any = await Supply.update(supply, { where: { id: id } });
      return supply_data;
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      const supply_data: any = await Supply.destroy({ where: { id: id } });
      return supply_data;
    } catch (error: any) {
      return error;
    }
  }
}
