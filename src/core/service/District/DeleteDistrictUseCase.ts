import { DistrictService } from 'src/domain/services/DistrictService/DistrictService';

export class DeleteDistrictUseCase {
  constructor(private districtService?: DistrictService) {
    this.districtService = new DistrictService();
  }

  async deleteDistrict(id: number) {
    try {
      const response = await this.districtService?.deleteDistrict(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
