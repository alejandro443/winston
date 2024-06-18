import { WayToPayService } from 'src/domain/services/WayToPayService/WayToPayService';

export class GetOneWayToPayUseCase {
  constructor(private wayToPayService?: WayToPayService) {
    this.wayToPayService = new WayToPayService();
  }

  async getOneWayToPay(id: number) {
    try {
      const response: any =
        await this.wayToPayService?.getOneWayToPay(id);
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
