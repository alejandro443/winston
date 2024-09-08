import { UpdatePointSaleUserDto } from 'src/core/shared/dto/PointSaleUser/point_sale_user_dto';
import { PointSaleUserService } from 'src/domain/services/PointSaleUserService/PointSaleUserService';

export class UpdateUseCase {
  constructor(private service?: PointSaleUserService) {
    this.service = new PointSaleUserService();
  }

  async updatePointSaleUser(
    id: number,
    body: UpdatePointSaleUserDto,
  ) {
    try {
      const response: any =
        await this.service?.ServiceUpdate(
          id,
          body,
        );
      
      return {
        id: response.id,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
