import { PointSaleUserService } from 'src/domain/services/PointSaleUserService/PointSaleUserService';
import { NewPointSaleUserDto } from 'src/core/shared/dto/PointSaleUser/point_sale_user_dto';

export class CreateUseCase {
  constructor(private service?: PointSaleUserService) {
    this.service = new PointSaleUserService();
  }

  async createPointSaleUser(body: NewPointSaleUserDto) {
    try {
      const response: any =
        await this.service?.ServiceCreate(body);
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
