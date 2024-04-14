import { ProvinceService } from 'src/domain/services/ProvinceService/ProvinceService';

export class GetAllProvinceUseCase {
  constructor(private provinceService?: ProvinceService) {
    this.provinceService = new ProvinceService();
  }

  async getAllProvince() {
    try {
      const response = await this.provinceService?.getAllProvince();
      return response.map((province: any) => ({
        id: province.id,
        name: province.name,
        cod_ubigeo: province.cod_ubigeo,
        department_id: province.department_id,
        active: province.active,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
