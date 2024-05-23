import {
  AllDistrictDto,
  NewDistrictDto,
  OneDistrictDto,
  UpdateDistrictDto,
} from 'src/core/shared/dto/District/district_dto';

export interface DistrictApplication {
  getAllDistrict(): Promise<Array<AllDistrictDto>>;
  getOneDistrict(id: number): Promise<OneDistrictDto>;
  createDistrict(district: NewDistrictDto): Promise<OneDistrictDto>;
  updateDistrict(
    id: number,
    district: UpdateDistrictDto,
  ): Promise<OneDistrictDto>;
  deleteDistrict(id: number);
}
