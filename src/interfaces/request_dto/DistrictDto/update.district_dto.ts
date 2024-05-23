import { DistrictDto } from '@src/core/shared/dto/District/district_dto';

export type UpdateDistrictRequestDto = Omit<DistrictDto, 'id, created_at'>;
