import { RegionService } from 'src/domain/services/RegionService/RegionService';

export class GetAllRegionUseCase {
  constructor(private regionService?: RegionService) {
    this.regionService = new RegionService();
  }

  async getAllRegion() {
    try {
      const response = await this.regionService?.getAllRegion();
      return response.map((region: any) => ({
        id: region.id,
        name: region.name,
        description: region.description,
        active: region.active,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
