import { NewZoneDetailDto } from '@src/core/shared/dto/ZoneDetail/zone_detail_dto';
import { ZoneDetailApplicationError } from '@src/core/shared/error/ZoneDetailApplicationError';
import { ZoneDetailRepository } from 'src/domain/repositories/ZoneDetailRepository/ZoneDetailRepository';

export class ZoneDetailService {
  constructor(private repository?: ZoneDetailRepository) {
    this.repository = new ZoneDetailRepository();
  }

  async getAllZoneDetail() {
    try {
      return this.repository?.getAllZoneDetails();
    } catch (error: any) {
      throw new ZoneDetailApplicationError(error.message);
    }
  }

  async createZoneDetail(zone_detail: NewZoneDetailDto) {
    try {
      return this.repository?.create(zone_detail);
    } catch (error: any) {
      return error;
    }
  }
}
