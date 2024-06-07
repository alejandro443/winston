import { SupplyTypeService } from 'src/domain/services/SupplyTypeService/SupplyTypeService';
import { NewSupplyTypeDto } from 'src/core/shared/dto/SupplyType/supply_type_dto';

export class CreateSupplyTypeUseCase {
  constructor(private supplyTypeService?: SupplyTypeService) {
    this.supplyTypeService = new SupplyTypeService();
  }

  async createSupplyType(supplyType: NewSupplyTypeDto) {
    try {
      const response: any =
        await this.supplyTypeService?.createSupplyType(supplyType);
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
