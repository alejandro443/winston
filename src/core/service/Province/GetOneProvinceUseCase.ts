import { ProvinceService } from 'src/domain/services/ProvinceService/ProvinceService';

export class GetOneProvinceUseCase {
  constructor(private provinceService?: ProvinceService) {
    this.provinceService = new ProvinceService();
  }

  async getOneProvince(id: number) {
    try {
      const response = await this.provinceService?.getOneProvince(id);
      return {
        id: response.id,
        name: response.name,
        cod_ubigeo: response.cod_ubigeo,
        department_id: response.department_id,
        active: response.active,
      };
    } catch (error: any) {
      return error;
    }
  }
}
