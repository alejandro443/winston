import { SkuListService } from 'src/domain/services/SkuListService/SkuListService';
import { NewSkuListDto } from 'src/core/shared/dto/SkuList/sku_list_dto';

export class CreateSkuListUseCase {
  constructor(private supplyTypeService?: SkuListService) {
    this.supplyTypeService = new SkuListService();
  }

  async createSkuList(supplyType: NewSkuListDto) {
    try {
      const response: any =
        await this.supplyTypeService?.createSkuList(supplyType);
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
