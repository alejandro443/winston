import { UpdatePointSaleDto } from 'src/core/shared/dto/PointSale/point_sale_dto';
import { PointSaleService } from 'src/domain/services/PointSaleService/PointSaleService';

export class UpdatePointSaleUseCase {
  constructor(private service?: PointSaleService) {
    this.service = new PointSaleService();
  }

  async updatePointSale(
    id: number,
    point_sale: UpdatePointSaleDto,
  ) {
    try {
      const response: any =
        await this.service?.updatePointSale(
          id,
          point_sale,
        );
      
        console.log(response)
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
