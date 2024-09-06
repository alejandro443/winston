import { PointSaleService } from 'src/domain/services/PointSaleService/PointSaleService';

export class DeletePointSaleUseCase {
  constructor(private service?: PointSaleService) {
    this.service = new PointSaleService();
  }

  async deletePointSale(id: number) {
    try {
      const response: any =
        await this.service?.deletePointSale(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
