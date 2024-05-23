import { RegionDto } from '@src/core/shared/dto/Region/region_dto';

export type UpdateRegionRequestDto = Omit<RegionDto, 'id, created_at'>;
