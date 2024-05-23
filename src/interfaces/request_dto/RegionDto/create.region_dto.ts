import { RegionDto } from '@src/core/shared/dto/Region/region_dto';

export class CreateRegionRequestDto
  extends RegionDto
  implements Omit<RegionDto, 'id, created_at'> {}
