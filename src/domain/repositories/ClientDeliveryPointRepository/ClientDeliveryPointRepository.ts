import { ClientDeliveryPointApplicationError } from '@src/core/shared/error/ClientDeliveryPointApplicationError';
import { DeliveryPoint } from '@src/domain/entities/DeliveryPoint.entity';
import { ClientDeliveryPoint } from 'src/domain/entities/ClientDeliveryPoint.entity';

export class ClientDeliveryPointRepository {
  constructor() {}

  async findOne(id: any) {
    try {
      return ClientDeliveryPoint.findOne({ where: { id: id } });
    } catch (error: any) {
      throw new ClientDeliveryPointApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async findAll() {
    try {
      return ClientDeliveryPoint.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      throw new ClientDeliveryPointApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async create(client_delivery_point: any) {
    try {
      var client_delivery_point_new: any = await ClientDeliveryPoint.create(client_delivery_point);
      return client_delivery_point_new;
    } catch (error: any) {
      throw new ClientDeliveryPointApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async update(id: any, client_delivery_point: any) {
    try {
      return ClientDeliveryPoint.update(client_delivery_point, { where: { id: id } });
    } catch (error: any) {
      throw new ClientDeliveryPointApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async deleted(id: number) {
    try {
      return ClientDeliveryPoint.destroy({ where: { id: id } });
    } catch (error: any) {
      throw new ClientDeliveryPointApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async findAllById(filter: Object) {
    try {
      const data: any = await ClientDeliveryPoint.findAll({ 
        include: [
          { model: DeliveryPoint, required: true }
        ],
        where: { ...filter, deleted_at: null }
      });
      return data;
    } catch (error: any) {
      throw new ClientDeliveryPointApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }
}
