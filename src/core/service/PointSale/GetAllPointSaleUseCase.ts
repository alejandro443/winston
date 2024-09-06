import { PointSaleService } from 'src/domain/services/PointSaleService/PointSaleService';

export class GetAllPointSaleUseCase {
  constructor(private service?: PointSaleService) {
    this.service = new PointSaleService();
  }

  async getAllPointSale() {
    try {
      const response: any =
        await this.service?.getAllPointSale();

      return response.map((data: any) => ({
        id: data.dataValues.id,
        code: data.dataValues.code,
        name: data.dataValues.name,
        description: data.dataValues.description,
        status: data.dataValues.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
