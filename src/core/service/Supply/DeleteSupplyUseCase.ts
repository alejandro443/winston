import { SupplyService } from 'src/domain/services/SupplyService/SupplyService';

export class DeleteSupplyUseCase {
  constructor(private supplyService?: SupplyService) {
    this.supplyService = new SupplyService();
  }

  async deleteSupply(id: number) {
    try {
      const response: any =
        await this.supplyService?.deleteSupply(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
