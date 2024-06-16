import { SkuListApplication } from 'src/core/application/SkuList/SkuListApplication';
import {
  NewSkuListDto
} from 'src/core/shared/dto/SkuList/sku_list_dto';
import { CreateSkuListUseCase } from './CreateSkuListUseCase';

export class SkuListApplicationService implements SkuListApplication {
  constructor(
    private createUseCase?: CreateSkuListUseCase
  ) {
    this.createUseCase = new CreateSkuListUseCase();
  }

  async createSkuList(sku_list: NewSkuListDto): Promise<any> {
    try {
      return this.createUseCase?.createSkuList(sku_list);
    } catch (error: any) {
      return error;
    }
  }
}
