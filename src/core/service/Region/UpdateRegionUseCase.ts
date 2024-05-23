import { UpdateRegionDto } from 'src/core/shared/dto/Region/region_dto';
import { RegionService } from 'src/domain/services/RegionService/RegionService';

export class UpdateRegionUseCase {
  constructor(private regionService?: RegionService) {
    this.regionService = new RegionService();
  }

  async updateRegion(id: number, region: UpdateRegionDto) {
    try {
      const response = await this.regionService?.updateRegion(id, region);
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
