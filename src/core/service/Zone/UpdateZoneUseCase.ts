import { AccessApplicationError } from '@src/core/shared/error/AccessApplicationError';
import { UpdateZoneDto } from 'src/core/shared/dto/Zone/zone_dto';
import { ZoneService } from 'src/domain/services/ZoneService/ZoneService';

export class UpdateZoneUseCase {
  constructor(private zoneService?: ZoneService) {
    this.zoneService = new ZoneService();
  }

  async updateZone(
    id_zone: number,
    zone: UpdateZoneDto,
  ) {
    try {
      const response: any =
        await this.zoneService?.updateZone(
          id_zone,
          zone,
        );
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
