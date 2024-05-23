import { RegionService } from 'src/domain/services/RegionService/RegionService';

export class GetOneRegionUseCase {
  constructor(private regionService?: RegionService) {
    this.regionService = new RegionService();
  }

  async getOneRegion(id: number) {
    try {
      const response = await this.regionService?.getOneRegion(id);
      return {
        id: response.id,
        name: response.name,
        description: response.description,
        active: response.active,
      };
    } catch (error: any) {
      return error;
    }
  }
}
