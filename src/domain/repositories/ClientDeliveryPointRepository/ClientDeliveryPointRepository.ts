import { ClientDeliveryPointApplicationError } from '@src/core/shared/error/ClientDeliveryPointApplicationError';
import { ClientDeliveryPoint } from 'src/domain/entities/ClientDeliveryPoint.entity';

export class ClientDeliveryPointRepository {
  constructor() {}

  async findOne(id: any) {
    try {
      return ClientDeliveryPoint.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return ClientDeliveryPoint.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(client_delivery_point: any) {
    try {
      var client_delivery_point_new: any = await ClientDeliveryPoint.create(client_delivery_point);
      return client_delivery_point_new;
    } catch (error: any) {
      console.log(error)
      throw new ClientDeliveryPointApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async update(id: any, client_delivery_point: any) {
    try {
      return ClientDeliveryPoint.update(client_delivery_point, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return ClientDeliveryPoint.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
