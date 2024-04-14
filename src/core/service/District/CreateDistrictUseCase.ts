import { DistrictService } from 'src/domain/services/DistrictService/DistrictService';
import { NewDistrictDto } from 'src/core/shared/dto/District/district_dto';

export class CreateDistrictUseCase {
  constructor(private districtService?: DistrictService) {
    this.districtService = new DistrictService();
  }

  async createDistrict(district: NewDistrictDto) {
    try {
      const response = await this.districtService?.createDistrict(district);
      return {
        id: response.id,
        name: response.name,
        cod_ubigeo: response.cod_ubigeo,
        province_id: response.province_id,
        active: response.active,
      };
    } catch (error: any) {
      return error;
    }
  }
}
