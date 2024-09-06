import { NewPointSaleDto } from 'src/core/shared/dto/PointSale/point_sale_dto';
import { PointSaleRepository } from 'src/domain/repositories/PointSaleRepository/PointSaleRepository';

export class PointSaleService {
  constructor(private repository?: PointSaleRepository) {
    this.repository = new PointSaleRepository();
  }

  async getOnePointSale(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      return error;
    }
  }

  async getAllPointSale() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createPointSale(body: NewPointSaleDto) {
    try {
      return this.repository?.create(body);
    } catch (error: any) {
      return error;
    }
  }

  async updatePointSale(id: number, body: NewPointSaleDto) {
    try {
      return this.repository?.update(id, body);
    } catch (error: any) {
      return error;
    }
  }

  async deletePointSale(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      return error;
    }
  }
}
