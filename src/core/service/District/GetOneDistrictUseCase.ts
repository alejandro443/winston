import { DistrictService } from 'src/domain/services/DistrictService/DistrictService';

export class GetOneDistrictUseCase {
  constructor(private districtService?: DistrictService) {
    this.districtService = new DistrictService();
  }

  async getOneDistrict(id: number) {
    try {
      const response = await this.districtService?.getOneDistrict(id);
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
