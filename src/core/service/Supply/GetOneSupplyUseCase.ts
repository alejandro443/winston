import { SupplyService } from 'src/domain/services/SupplyService/SupplyService';

export class GetOneSupplyUseCase {
  constructor(private supplyService?: SupplyService) {
    this.supplyService = new SupplyService();
  }

  async getOneSupply(id: number) {
    try {
      const response: any =
        await this.supplyService?.getOneSupply(id);
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
