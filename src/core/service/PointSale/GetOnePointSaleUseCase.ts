import { PointSaleService } from 'src/domain/services/PointSaleService/PointSaleService';

export class GetOnePointSaleUseCase {
  constructor(private service?: PointSaleService) {
    this.service = new PointSaleService();
  }

  async getOnePointSale(id: number) {
    try {
      const response: any =
        await this.service?.getOnePointSale(id);
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
