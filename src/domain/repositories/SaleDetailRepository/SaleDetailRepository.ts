import { SaleDetail } from 'src/domain/entities/SaleDetail.entity';

export class SaleDetailRepository {
  constructor() {}

  async create(body: any) {
    try {
      const sale_data: any = await SaleDetail.bulkCreate(body);
      return sale_data;
    } catch (error: any) {
      console.log(error)
      return error;
    }
  }
}
