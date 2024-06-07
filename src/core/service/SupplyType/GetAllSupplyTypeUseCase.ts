import { SupplyTypeService } from 'src/domain/services/SupplyTypeService/SupplyTypeService';

export class GetAllSupplyTypeUseCase {
  constructor(private supplyTypeService?: SupplyTypeService) {
    this.supplyTypeService = new SupplyTypeService();
  }

  async getAllSupplyType() {
    try {
      const response: any = await this.supplyTypeService?.getAllSupplyType();

      return response.map((supplyType: any) => ({
        id: supplyType.id,
        code: supplyType.code,
        name: supplyType.name,
        description: supplyType.description,
        status: supplyType.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
