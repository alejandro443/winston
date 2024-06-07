import { SupplyTypeService } from 'src/domain/services/SupplyTypeService/SupplyTypeService';

export class DeleteSupplyTypeUseCase {
  constructor(private supplyTypeService?: SupplyTypeService) {
    this.supplyTypeService = new SupplyTypeService();
  }

  async deleteSupplyType(code: string) {
    try {
      const response: any =
        await this.supplyTypeService?.deleteSupplyType(code);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
