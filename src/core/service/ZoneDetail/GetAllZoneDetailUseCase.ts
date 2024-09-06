import { ZoneDetailApplicationError } from '@src/core/shared/error/ZoneDetailApplicationError';
import { ZoneDetailService } from 'src/domain/services/ZoneDetailService/ZoneDetailService';

export class GetAllZoneDetailUseCase {
  constructor(private zoneService?: ZoneDetailService) {
    this.zoneService = new ZoneDetailService();
  }

  async getAllZoneDetail() {
    try {
      const response: any = await this.zoneService?.getAllZoneDetail();
      var data_response = response.map((zone_data: any) => ({
        id: zone_data.zone_id,
        zone: {
          name: zone_data.name,
          delivery_days: zone_data.delivery_days,
          districts: zone_data.districts,
          reference: zone_data.reference,
          status: zone_data.status
        },
        clients: zone_data.clientCount,
        users: zone_data.userNames
      }));

      return data_response;
    } catch (error: any) {
      throw new ZoneDetailApplicationError(error);
    }
  }
}
