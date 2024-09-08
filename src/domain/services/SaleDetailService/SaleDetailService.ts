import { NewSaleDetailDto } from 'src/core/shared/dto/SaleDetail/sale_detail_dto';
import { SaleDetailRepository } from 'src/domain/repositories/SaleDetailRepository/SaleDetailRepository';

export class SaleDetailService {
  constructor(private repository?: SaleDetailRepository) {
    this.repository = new SaleDetailRepository();
  }

  async createSaleDetail(body: NewSaleDetailDto) {
    try {
      return await this.repository?.create(body);
    } catch (error: any) {
      return error;
    }
  }
}
