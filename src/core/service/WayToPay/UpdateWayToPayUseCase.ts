import { UpdateWayToPayDto } from 'src/core/shared/dto/WayToPay/way_to_pay_dto';
import { WayToPayService } from 'src/domain/services/WayToPayService/WayToPayService';

export class UpdateWayToPayUseCase {
  constructor(private wayToPayService?: WayToPayService) {
    this.wayToPayService = new WayToPayService();
  }

  async updateWayToPay(code: any, wayToPay: UpdateWayToPayDto) {
    try {
      const response: any = await this.wayToPayService?.updateWayToPay(
        code,
        wayToPay,
      );
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
