import { RegionApplicationError } from '@src/core/shared/error/RegionApplicationError';
import { NewRegionDto } from 'src/core/shared/dto/Region/region_dto';
import { RegionRepository } from 'src/domain/repositories/RegionRepository/RegionRepository';

export class RegionService {
  constructor(private repository?: RegionRepository) {
    this.repository = new RegionRepository();
  }

  async getAllRegion() {
    try {
      return this.repository.findAll();
    } catch (error: any) {
      throw new RegionApplicationError(error.message);
    }
  }

  async getOneRegion(id: number) {
    try {
      return this.repository.findOne(id);
    } catch (error: any) {
      throw new RegionApplicationError(error.message);
    }
  }

  async createRegion(region: NewRegionDto) {
    try {
      return this.repository.create(region);
    } catch (error: any) {
      throw new RegionApplicationError(error.message);
    }
  }

  async updateRegion(id: number, region: NewRegionDto) {
    try {
      return this.repository.update(id, region);
    } catch (error: any) {
      throw new RegionApplicationError(error.message);
    }
  }

  async deleteRegion(id: number) {
    try {
      return this.repository.deleted(id);
    } catch (error: any) {
      throw new RegionApplicationError(error.message);
    }
  }
}
