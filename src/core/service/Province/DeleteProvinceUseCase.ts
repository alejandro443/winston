import { ProvinceService } from 'src/domain/services/ProvinceService/ProvinceService';

export class DeleteProvinceUseCase {
  constructor(private provinceService?: ProvinceService) {
    this.provinceService = new ProvinceService();
  }

  async deleteProvince(id: number) {
    try {
      const response = await this.provinceService?.deleteProvince(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
