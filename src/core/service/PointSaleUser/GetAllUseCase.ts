import { PointSaleUserService } from 'src/domain/services/PointSaleUserService/PointSaleUserService';

export class GetAllUseCase {
  constructor(private service?: PointSaleUserService) {
    this.service = new PointSaleUserService();
  }

  async getAllPointSaleUser() {
    try {
      const response: any =
        await this.service?.ServiceFindAll();

      return response.map((data: any) => ({
        id: data.dataValues.id,
        user: data.dataValues.user,
        point_sale: data.dataValues.point_sale,
        status: data.dataValues.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
