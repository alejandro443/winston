import { NewWayToPayDto } from 'src/core/shared/dto/WayToPay/way_to_pay_dto';
import { WayToPayRepository } from 'src/domain/repositories/WayToPayRepository/WayToPayRepository';

export class WayToPayService {
  constructor(private repository?: WayToPayRepository) {
    this.repository = new WayToPayRepository();
  }

  async getOneWayToPay(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      return error;
    }
  }

  async getAllWayToPay() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createWayToPay(way_to_pay: NewWayToPayDto) {
    try {
      return this.repository?.create(way_to_pay);
    } catch (error: any) {
      return error;
    }
  }

  async updateWayToPay(id: any, way_to_pay: NewWayToPayDto) {
    try {
      return this.repository?.update(id, way_to_pay);
    } catch (error: any) {
      return error;
    }
  }

  async deleteWayToPay(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      return error;
    }
  }
}
