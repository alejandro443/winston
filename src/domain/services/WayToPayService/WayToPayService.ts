import { NewWayToPayDto } from 'src/core/shared/dto/WayToPay/way_to_pay_dto';
import { WayToPayRepository } from 'src/domain/repositories/WayToPayRepository/WayToPayRepository';

export class WayToPayService {
  constructor(private repository?: WayToPayRepository) {
    this.repository = new WayToPayRepository();
  }

  async getOneWayToPay(code: string) {
    try {
      return this.repository?.findOne(code);
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

  async updateWayToPay(code: any, way_to_pay: NewWayToPayDto) {
    try {
      return this.repository?.update(code, way_to_pay);
    } catch (error: any) {
      return error;
    }
  }

  async deleteWayToPay(code: string) {
    try {
      return this.repository?.deleted(code);
    } catch (error: any) {
      return error;
    }
  }
}
