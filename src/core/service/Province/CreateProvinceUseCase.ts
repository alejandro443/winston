import { ProvinceService } from 'src/domain/services/ProvinceService/ProvinceService';
import { NewProvinceDto } from 'src/core/shared/dto/Province/province_dto';

export class CreateProvinceUseCase {
  constructor(private provinceService?: ProvinceService) {
    this.provinceService = new ProvinceService();
  }

  async createProvince(province: NewProvinceDto) {
    try {
      const response = await this.provinceService?.createProvince(province);
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
