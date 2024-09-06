import { PointSaleService } from 'src/domain/services/PointSaleService/PointSaleService';
import { NewPointSaleDto } from 'src/core/shared/dto/PointSale/point_sale_dto';

export class CreatePointSaleUseCase {
  constructor(private service?: PointSaleService) {
    this.service = new PointSaleService();
  }

  async createPointSale(body: NewPointSaleDto) {
    try {
      const response: any =
        await this.service?.createPointSale(body);
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
