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
}
