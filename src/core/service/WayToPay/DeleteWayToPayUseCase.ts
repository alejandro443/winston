import { WayToPayService } from 'src/domain/services/WayToPayService/WayToPayService';

export class DeleteWayToPayUseCase {
  constructor(private wayToPayService?: WayToPayService) {
    this.wayToPayService = new WayToPayService();
  }

  async deleteWayToPay(id: number) {
    try {
      const response: any =
        await this.wayToPayService?.deleteWayToPay(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
