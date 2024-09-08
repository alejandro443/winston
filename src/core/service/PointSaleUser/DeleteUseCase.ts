import { PointSaleUserService } from 'src/domain/services/PointSaleUserService/PointSaleUserService';

export class DeleteUseCase {
  constructor(private service?: PointSaleUserService) {
    this.service = new PointSaleUserService();
  }

  async deletePointSaleUser(id: number) {
    try {
      const response: any =
        await this.service?.ServiceDelete(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
