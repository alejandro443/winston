import { SupplyTypeService } from 'src/domain/services/SupplyTypeService/SupplyTypeService';

export class GetOneSupplyTypeUseCase {
  constructor(private supplyTypeService?: SupplyTypeService) {
    this.supplyTypeService = new SupplyTypeService();
  }

  async getOneSupplyType(id: number) {
    try {
      const response: any =
        await this.supplyTypeService?.getOneSupplyType(id);
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
