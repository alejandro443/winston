import { DistrictService } from 'src/domain/services/DistrictService/DistrictService';

export class GetAllDistrictUseCase {
  constructor(private districtService?: DistrictService) {
    this.districtService = new DistrictService();
  }

  async getAllDistrict() {
    try {
      const response = await this.districtService?.getAllDistrict();
      return response.map((district: any) => ({
        id: district.id,
        name: district.name,
        cod_ubigeo: district.cod_ubigeo,
        province_id: district.province_id,
        active: district.active,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
