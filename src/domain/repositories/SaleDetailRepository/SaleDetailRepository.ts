import {
  NewSaleDetailDto
} from 'src/core/shared/dto/SaleDetail/sale_detail_dto';
import { SaleDetail } from 'src/domain/entities/SaleDetail.entity';

export class SaleDetailRepository {
  constructor() {}

  async create(body: NewSaleDetailDto) {
    try {
      const sale_data: any = await SaleDetail.create(body);
      return sale_data;
    } catch (error: any) {
      return error;
    }
  }
}
