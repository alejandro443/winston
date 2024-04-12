import { ProvinceDto } from '@src/core/shared/dto/Province/province_dto';

export type UpdateProvinceRequestDto = Omit<ProvinceDto, 'id, created_at'>;
