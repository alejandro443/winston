import { SkuListApplicationError } from '@src/core/shared/error/SkuListApplicationError';
import { NewSkuListDto } from 'src/core/shared/dto/SkuList/sku_list_dto';
import { SkuListRepository } from 'src/domain/repositories/SkuListRepository/SkuListRepository';

export class SkuListService {
  constructor(private repository?: SkuListRepository) {
    this.repository = new SkuListRepository();
  }

  async createSkuList(sku_list: NewSkuListDto) {
    try {
      const sku_list_data: any = await this.repository?.create(sku_list);
      return sku_list_data;
    } catch (error: any) {
      throw new SkuListApplicationError(error);
    }
  }
}
