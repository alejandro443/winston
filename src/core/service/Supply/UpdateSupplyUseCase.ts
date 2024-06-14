import { UpdateSupplyDto } from 'src/core/shared/dto/Supply/supply_dto';
import { SupplyService } from 'src/domain/services/SupplyService/SupplyService';

export class UpdateSupplyUseCase {
  constructor(private supplyService?: SupplyService) {
    this.supplyService = new SupplyService();
  }

  async updateSupply(id: any, supply: UpdateSupplyDto) {
    try {
      const response: any = await this.supplyService?.updateSupply(
        id,
        supply,
      );
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
