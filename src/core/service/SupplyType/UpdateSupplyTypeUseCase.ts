import { UpdateSupplyTypeDto } from 'src/core/shared/dto/SupplyType/supply_type_dto';
import { SupplyTypeService } from 'src/domain/services/SupplyTypeService/SupplyTypeService';

export class UpdateSupplyTypeUseCase {
  constructor(private supplyTypeService?: SupplyTypeService) {
    this.supplyTypeService = new SupplyTypeService();
  }

  async updateSupplyType(id: number, supplyType: UpdateSupplyTypeDto) {
    try {
      const response: any = await this.supplyTypeService?.updateSupplyType(
        id,
        supplyType,
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
