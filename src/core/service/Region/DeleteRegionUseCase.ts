import { RegionService } from 'src/domain/services/RegionService/RegionService';

export class DeleteRegionUseCase {
  constructor(private regionService?: RegionService) {
    this.regionService = new RegionService();
  }

  async deleteRegion(id: number) {
    try {
      const response = await this.regionService?.deleteRegion(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
