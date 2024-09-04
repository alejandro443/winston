import { ZoneApplicationError } from '@src/core/shared/error/ZoneApplicationError';
import { ZoneService } from 'src/domain/services/ZoneService/ZoneService';

export class GetAllZoneUseCase {
  constructor(private zoneService?: ZoneService) {
    this.zoneService = new ZoneService();
  }

  async getAllZone() {
    try {
      const response: any =
        await this.zoneService?.getAllZone();

      return response.map((zone: any) => ({
        id: zone.id,
        name: zone.name,
        delivery_days: zone.delivery_days,
        districts: zone.districts,
        reference: zone.reference,
        status: zone.status
      }));
    } catch (error: any) {
      throw new ZoneApplicationError(error);
    }
  }
}
