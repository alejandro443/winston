import { UpdateDistrictDto } from 'src/core/shared/dto/District/district_dto';
import { DistrictService } from 'src/domain/services/DistrictService/DistrictService';

export class UpdateDistrictUseCase {
  constructor(private districtService?: DistrictService) {
    this.districtService = new DistrictService();
  }

  async updateDistrict(id: number, district: UpdateDistrictDto) {
    try {
      const response = await this.districtService?.updateDistrict(id, district);
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
