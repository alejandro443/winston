import { RegionApplication } from 'src/core/application/Region/RegionApplication';
import {
  NewRegionDto,
  UpdateRegionDto,
} from 'src/core/shared/dto/Region/region_dto';
import { GetOneRegionUseCase } from './GetOneRegionUseCase';
import { GetAllRegionUseCase } from './GetAllRegionUseCase';
import { CreateRegionUseCase } from './CreateRegionUseCase';
import { UpdateRegionUseCase } from './UpdateRegionUseCase';
import { DeleteRegionUseCase } from './DeleteRegionUseCase';

export class RegionApplicationService implements RegionApplication {
  constructor(
    private getAllUseCase?: GetAllRegionUseCase,
    private getOneUseCase?: GetOneRegionUseCase,
    private createUseCase?: CreateRegionUseCase,
    private updateUseCase?: UpdateRegionUseCase,
    private deleteUseCase?: DeleteRegionUseCase,
  ) {
    this.getAllUseCase = new GetAllRegionUseCase();
    this.getOneUseCase = new GetOneRegionUseCase();
    this.createUseCase = new CreateRegionUseCase();
    this.updateUseCase = new UpdateRegionUseCase();
    this.deleteUseCase = new DeleteRegionUseCase();
  }

  async getAllRegion() {
    try {
      return this.getAllUseCase?.getAllRegion();
    } catch (error: any) {
      return error;
    }
  }

  async getOneRegion(region_id: number) {
    try {
      return this.getOneUseCase?.getOneRegion(region_id);
    } catch (error: any) {
      return error;
    }
  }

  async createRegion(region: NewRegionDto) {
    try {
      return this.createUseCase?.createRegion(region);
    } catch (error: any) {
      return error;
    }
  }

  async updateRegion(id: number, region: UpdateRegionDto) {
    try {
      return this.updateUseCase?.updateRegion(id, region);
    } catch (error: any) {
      return error;
    }
  }

  async deleteRegion(id: number) {
    try {
      return this.deleteUseCase?.deleteRegion(id);
    } catch (error: any) {
      return error;
    }
  }
}
