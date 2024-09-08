import { NewSaleDto } from 'src/core/shared/dto/Sale/sale_dto';
import { SaleRepository } from 'src/domain/repositories/SaleRepository/SaleRepository';

export class SaleService {
  constructor(private repository?: SaleRepository) {
    this.repository = new SaleRepository();
  }

  async getOneSale(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      return error;
    }
  }

  async getAllSale() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createSale(body: NewSaleDto) {
    return await this.repository?.create(body);
  }

  async updateSale(id: number, body: NewSaleDto) {
    try {
      return this.repository?.update(id, body);
    } catch (error: any) {
      return error;
    }
  }

  async deleteSale(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      return error;
    }
  }
}
