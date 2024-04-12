import { UpdateProvinceDto } from 'src/core/shared/dto/Province/province_dto';
import { ProvinceService } from 'src/domain/services/ProvinceService/ProvinceService';

export class UpdateProvinceUseCase {
  constructor(private provinceService?: ProvinceService) {
    this.provinceService = new ProvinceService();
  }

  async updateProvince(id: number, province: UpdateProvinceDto) {
    try {
      const response = await this.provinceService?.updateProvince(id, province);
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
