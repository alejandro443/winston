import { PointSaleUserService } from 'src/domain/services/PointSaleUserService/PointSaleUserService';

export class GetOneUseCase {
  constructor(private service?: PointSaleUserService) {
    this.service = new PointSaleUserService();
  }

  async getOnePointSaleUser(id: number) {
    try {
      const response: any =
        await this.service?.ServiceGetOne(id);
      return {
        id: response.id,
        user: response.user,
        point_sale: response.point_sale,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
