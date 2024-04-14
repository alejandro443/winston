import { ProvinceDto } from '@src/core/shared/dto/Province/province_dto';

export class CreateProvinceRequestDto
  extends ProvinceDto
  implements Omit<ProvinceDto, 'id, created_at'> {}
