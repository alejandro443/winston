import { ZoneDetailApplicationError } from '@src/core/shared/error/ZoneDetailApplicationError';
import { ZoneDetailService } from 'src/domain/services/ZoneDetailService/ZoneDetailService';

export class GetAllZoneDetailUseCase {
  constructor(private zoneService?: ZoneDetailService) {
    this.zoneService = new ZoneDetailService();
  }

  async getAllZoneDetail() {
    try {
      const response: any =
        await this.zoneService?.getAllZoneDetail();

      return response.map((zone: any) => ({
        id: response.id,
        name: response.name,
        delivery_days: response.delivery_days,
        districts: response.districts,
        reference: response.reference,
        status: response.status
      }));
    } catch (error: any) {
      throw new ZoneDetailApplicationError(error);
    }
  }
}
