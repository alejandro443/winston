import { WayToPayService } from 'src/domain/services/WayToPayService/WayToPayService';

export class GetAllWayToPayUseCase {
  constructor(private wayToPayService?: WayToPayService) {
    this.wayToPayService = new WayToPayService();
  }

  async getAllWayToPay() {
    try {
      const response: any = await this.wayToPayService?.getAllWayToPay();

      return response.map((wayToPay: any) => ({
        id: wayToPay.id,
        code: wayToPay.code,
        name: wayToPay.name,
        description: wayToPay.description,
        status: wayToPay.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
