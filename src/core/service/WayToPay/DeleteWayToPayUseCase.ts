import { WayToPayService } from 'src/domain/services/WayToPayService/WayToPayService';

export class DeleteWayToPayUseCase {
  constructor(private wayToPayService?: WayToPayService) {
    this.wayToPayService = new WayToPayService();
  }

  async deleteWayToPay(code: string) {
    try {
      const response: any =
        await this.wayToPayService?.deleteWayToPay(code);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
