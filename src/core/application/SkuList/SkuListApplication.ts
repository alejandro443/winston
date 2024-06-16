import {
  NewSkuListDto,
} from 'src/core/shared/dto/SkuList/sku_list_dto';

export interface SkuListApplication {
  createSkuList(supply_type: NewSkuListDto): Promise<Object>;
}
