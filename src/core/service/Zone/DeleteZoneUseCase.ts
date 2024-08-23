import { AccessApplicationError } from '@src/core/shared/error/AccessApplicationError';
import { ZoneService } from 'src/domain/services/ZoneService/ZoneService';

export class DeleteZoneUseCase {
  constructor(private zoneService?: ZoneService) {
    this.zoneService = new ZoneService();
  }

  async deleteZone(id_zone: number) {
    try {
      const response: any =
        await this.zoneService?.deleteZone(id_zone);
      return { id: response.id };
    } catch (error: any) {
      throw new AccessApplicationError(error);
    }
  }
}
