import {
  AllProvinceDto,
  NewProvinceDto,
  OneProvinceDto,
  UpdateProvinceDto,
} from 'src/core/shared/dto/Province/province_dto';

export interface ProvinceApplication {
  getAllProvince(): Promise<Array<AllProvinceDto>>;
  getOneProvince(id: number): Promise<OneProvinceDto>;
  createProvince(province: NewProvinceDto): Promise<OneProvinceDto>;
  updateProvince(
    id: number,
    province: UpdateProvinceDto,
  ): Promise<OneProvinceDto>;
  deleteProvince(id: number);
}
