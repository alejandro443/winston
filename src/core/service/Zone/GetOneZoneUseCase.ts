import { AccessApplicationError } from '@src/core/shared/error/AccessApplicationError';
import { ZoneService } from 'src/domain/services/ZoneService/ZoneService';

export class GetOneZoneUseCase {
  constructor(private zoneService?: ZoneService) {
    this.zoneService = new ZoneService();
  }

  async getOneZone(id_zone: number) {
    try {
      const response: any =
        await this.zoneService?.getOneZone(id_zone);
      return {
        id: response.id,
        name: response.name,
        delivery_days: response.delivery_days,
        districts: response.districts,
        reference: response.reference,
        status: response.status
      };
    } catch (error: any) {
      throw new AccessApplicationError(error);
    }
  }
}
