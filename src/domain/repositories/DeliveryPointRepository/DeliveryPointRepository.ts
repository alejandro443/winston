import { DeliveryPointApplicationError } from '@src/core/shared/error/DeliveryPointApplicationError';
import { DeliveryPoint } from 'src/domain/entities/DeliveryPoint.entity';

export class DeliveryPointRepository {
  constructor() {}

  async findOne(id: any) {
    try {
      return DeliveryPoint.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return DeliveryPoint.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(delivery_point: any) {
    try {
      var delivery_point_new: any = await DeliveryPoint.create(delivery_point);
      return delivery_point_new;
    } catch (error: any) {
      throw new DeliveryPointApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async update(id: any, delivery_point: any) {
    try {
      return DeliveryPoint.update(delivery_point, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return DeliveryPoint.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
