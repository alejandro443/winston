import { WayToPayService } from 'src/domain/services/WayToPayService/WayToPayService';
import { NewWayToPayDto } from 'src/core/shared/dto/WayToPay/way_to_pay_dto';

export class CreateWayToPayUseCase {
  constructor(private wayToPayService?: WayToPayService) {
    this.wayToPayService = new WayToPayService();
  }

  async createWayToPay(wayToPay: NewWayToPayDto) {
    try {
      const response: any =
        await this.wayToPayService?.createWayToPay(wayToPay);
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
