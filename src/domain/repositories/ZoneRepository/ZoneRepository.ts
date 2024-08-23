import {
  NewZoneDto,
  UpdateZoneDto,
} from 'src/core/shared/dto/Zone/zone_dto';
import { Zone } from 'src/domain/entities/Zone.entity';

export class ZoneRepository {
  constructor() {}

  async findOne(id_zone: number) {
    try {
      return Zone.findOne({ where: { id: id_zone } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return Zone.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(zone: NewZoneDto) {
    try {
      return Zone.create(zone);
    } catch (error: any) {
      return error;
    }
  }

  async update(id_zone: any, zone: UpdateZoneDto) {
    try {
      return Zone.update(zone, { where: { id: id_zone } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id_zone: number) {
    try {
      return Zone.destroy({ where: { id: id_zone } });
    } catch (error: any) {
      return error;
    }
  }
}
