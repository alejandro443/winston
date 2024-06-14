import { SupplyApplicationError } from '@src/core/shared/error/SupplyApplicationError';
import { NewSupplyDto } from 'src/core/shared/dto/Supply/supply_dto';
import { SupplyRepository } from 'src/domain/repositories/SupplyRepository/SupplyRepository';

export class SupplyService {
  constructor(private repository?: SupplyRepository) {
    this.repository = new SupplyRepository();
  }

  async getOneSupply(id: number) {
    try {
      const supply_data: any = await this.repository?.findOne(id);
      return supply_data;
    } catch (error: any) {
      throw new SupplyApplicationError(error);
    }
  }

  async getAllSupply() {
    try {
      const supply_data: any = await this.repository?.findAll();
      return supply_data;
    } catch (error: any) {
      throw new SupplyApplicationError(error);
    }
  }

  async createSupply(supply: NewSupplyDto) {
    try {
      const supply_data: any = await this.repository?.create(supply);
      return supply_data;
    } catch (error: any) {
      throw new SupplyApplicationError(error);
    }
  }

  async updateSupply(id: number, supply: NewSupplyDto) {
    try {
      const supply_data: any = await this.repository?.update(id, supply);
      return supply_data;
    } catch (error: any) {
      throw new SupplyApplicationError(error);
    }
  }

  async deleteSupply(id: number) {
    try {
      const supply_data: any = await this.repository?.deleted(id);
      return supply_data;
    } catch (error: any) {
      throw new SupplyApplicationError(error);
    }
  }
}
