import { DeliveryPointApplicationError } from '@src/core/shared/error/DeliveryPointApplicationError';
import { ClientDeliveryPointRepository } from 'src/domain/repositories/ClientDeliveryPointRepository/ClientDeliveryPointRepository';

export class ClientDeliveryPointService {
  constructor(private repository?: ClientDeliveryPointRepository) {
    this.repository = new ClientDeliveryPointRepository();
  }

  async getOneClientDeliveryPoint(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      return error;
    }
  }

  async getAllClientDeliveryPoint() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createClientDeliveryPoint(company_worker: any) {
    try {
      var client_delivery_point_new: any = await this.repository?.create(company_worker);
      return client_delivery_point_new;
    } catch (error: any) {
      console.log(error)
      throw new DeliveryPointApplicationError(error)
    }
  }

  async updateClientDeliveryPoint(id: any, company_worker: any) {
    try {
      return this.repository?.update(id, company_worker);
    } catch (error: any) {
      return error;
    }
  }

  async deleteClientDeliveryPoint(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      return error;
    }
  }
}
