import { DistrictDto } from '@src/core/shared/dto/District/district_dto';

export class CreateDistrictRequestDto
  extends DistrictDto
  implements Omit<DistrictDto, 'id, created_at'> {}
