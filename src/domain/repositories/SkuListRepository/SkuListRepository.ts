import {
  NewSkuListDto
} from 'src/core/shared/dto/SkuList/sku_list_dto';
import { SkuList } from 'src/domain/entities/SkuList.entity';

export class SkuListRepository {
  constructor() {}

  async create(supply: NewSkuListDto) {
    try {
      const supply_data: any = await SkuList.create(supply);
      return supply_data;
    } catch (error: any) {
      return error;
    }
  }
}
