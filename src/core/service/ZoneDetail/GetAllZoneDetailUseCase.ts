import { ZoneDetailApplicationError } from '@src/core/shared/error/ZoneDetailApplicationError';
import { ZoneDetailService } from 'src/domain/services/ZoneDetailService/ZoneDetailService';

export class GetAllZoneDetailUseCase {
  constructor(private zoneService?: ZoneDetailService) {
    this.zoneService = new ZoneDetailService();
  }

  async getAllZoneDetail() {
    try {
      const response: any = await this.zoneService?.getAllZoneDetail();

      console.log(response)

      return response.map((zone: any) => ({
        id: zone.id,
        name: zone.name,
        delivery_days: zone.delivery_days,
        districts: zone.districts,
        reference: zone.reference,
        status: zone.status
      }));
    } catch (error: any) {
      throw new ZoneDetailApplicationError(error);
    }
  }
}
