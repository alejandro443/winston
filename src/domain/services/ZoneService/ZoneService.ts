import { NewZoneDto } from 'src/core/shared/dto/Zone/zone_dto';
import { ZoneRepository } from 'src/domain/repositories/ZoneRepository/ZoneRepository';

export class ZoneService {
  constructor(private repository?: ZoneRepository) {
    this.repository = new ZoneRepository();
  }

  async getOneZone(id_zone: number) {
    try {
      return this.repository?.findOne(id_zone);
    } catch (error: any) {
      return error;
    }
  }

  async getAllZone() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createZone(zone: NewZoneDto) {
    try {
      return this.repository?.create(zone);
    } catch (error: any) {
      return error;
    }
  }

  async updateZone(id_zone: any, zone: NewZoneDto) {
    try {
      return this.repository?.update(id_zone, zone);
    } catch (error: any) {
      return error;
    }
  }

  async deleteZone(id_zone: number) {
    try {
      return this.repository?.deleted(id_zone);
    } catch (error: any) {
      return error;
    }
  }
}
