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
        description: response.description,
        delivery_days: response.delivery_days,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
