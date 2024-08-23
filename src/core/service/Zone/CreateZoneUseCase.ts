import { ZoneService } from 'src/domain/services/ZoneService/ZoneService';
import { NewZoneDto } from 'src/core/shared/dto/Zone/zone_dto';
import { AccessApplicationError } from '@src/core/shared/error/AccessApplicationError';

export class CreateZoneUseCase {
  constructor(private zoneService?: ZoneService) {
    this.zoneService = new ZoneService();
  }

  async createZone(zone: NewZoneDto) {
    try {
      const response: any =
        await this.zoneService?.createZone(zone);
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
