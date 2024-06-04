import { DeliveryPointApplicationError } from '@src/core/shared/error/DeliveryPointApplicationError';
import { DeliveryPointRepository } from 'src/domain/repositories/DeliveryPointRepository/DeliveryPointRepository';

export class DeliveryPointService {
  constructor(private repository?: DeliveryPointRepository) {
    this.repository = new DeliveryPointRepository();
  }

  async getOneDeliveryPoint(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      return error;
    }
  }

  async getAllDeliveryPoint() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createDeliveryPoint(delivery_point: any) {
    try {
      var delivery_point_new: any = await this.repository?.create(delivery_point);
      return delivery_point_new;
    } catch (error: any) {
      throw new DeliveryPointApplicationError(error);
    }
  }

  async updateDeliveryPoint(id: any, delivery_point: any) {
    try {
      return this.repository?.update(id, delivery_point);
    } catch (error: any) {
      return error;
    }
  }

  async deleteDeliveryPoint(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      return error;
    }
  }
}
