import { RegionService } from 'src/domain/services/RegionService/RegionService';
import { NewRegionDto } from 'src/core/shared/dto/Region/region_dto';

export class CreateRegionUseCase {
  constructor(private regionService?: RegionService) {
    this.regionService = new RegionService();
  }

  async createRegion(region: NewRegionDto) {
    try {
      const response = await this.regionService.createRegion(region);
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
