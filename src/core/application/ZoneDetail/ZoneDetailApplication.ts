import { AllZoneDetailDto } from '@src/core/shared/dto/ZoneDetail/zone_detail_dto';

export interface ZoneDetailApplication {
  getAllZoneDetail(): Promise<Array<AllZoneDetailDto>>;
}
