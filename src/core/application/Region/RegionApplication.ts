import {
  AllRegionDto,
  NewRegionDto,
  OneRegionDto,
  UpdateRegionDto,
} from 'src/core/shared/dto/Region/region_dto';

export interface RegionApplication {
  getAllRegion(): Promise<Array<AllRegionDto>>;
  getOneRegion(id: number): Promise<OneRegionDto>;
  createRegion(region: NewRegionDto): Promise<OneRegionDto>;
  updateRegion(id: number, region: UpdateRegionDto): Promise<OneRegionDto>;
  deleteRegion(id: number);
}
