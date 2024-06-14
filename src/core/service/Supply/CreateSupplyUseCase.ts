import { SupplyService } from 'src/domain/services/SupplyService/SupplyService';
import { NewSupplyDto } from 'src/core/shared/dto/Supply/supply_dto';

export class CreateSupplyUseCase {
  constructor(private supplyTypeService?: SupplyService) {
    this.supplyTypeService = new SupplyService();
  }

  async createSupply(supplyType: NewSupplyDto) {
    try {
      const response: any =
        await this.supplyTypeService?.createSupply(supplyType);
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
