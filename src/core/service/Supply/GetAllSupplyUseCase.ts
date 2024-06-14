import { SupplyService } from 'src/domain/services/SupplyService/SupplyService';

export class GetAllSupplyUseCase {
  constructor(private supplyService?: SupplyService) {
    this.supplyService = new SupplyService();
  }

  async getAllSupply() {
    try {
      const response: any = await this.supplyService?.getAllSupply();

      return response.map((supply: any) => ({
        id: supply.id,
        code: supply.code,
        name: supply.name,
        description: supply.description,
        status: supply.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
