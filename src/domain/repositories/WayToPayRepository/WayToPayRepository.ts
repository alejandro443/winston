import {
  NewWayToPayDto,
  UpdateWayToPayDto,
} from 'src/core/shared/dto/WayToPay/way_to_pay_dto';
import { WayToPay } from 'src/domain/entities/WayToPay.entity';

export class WayToPayRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return WayToPay.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return WayToPay.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(way_to_pay: NewWayToPayDto) {
    try {
      return WayToPay.create(way_to_pay);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: any, way_to_pay: UpdateWayToPayDto) {
    try {
      return WayToPay.update(way_to_pay, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return WayToPay.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
