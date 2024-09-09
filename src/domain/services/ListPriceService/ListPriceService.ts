import { NewDto } from 'src/core/shared/dto/ListPrice/list_price_dto';
import { ListPriceRepository } from 'src/domain/repositories/ListPriceRepository/ListPriceRepository';

export class ListPriceService {
  constructor(private repository?: ListPriceRepository) {
    this.repository = new ListPriceRepository();
  }

  async getOneListPrice(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      return error;
    }
  }

  async getAllListPrice() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createListPrice(body: NewDto) {
    try {
      return this.repository?.create(body);
    } catch (error: any) {
      return error;
    }
  }

  async updateListPrice(id: number, body: NewDto) {
    try {
      return this.repository?.update(id, body);
    } catch (error: any) {
      return error;
    }
  }

  async deleteListPrice(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      return error;
    }
  }
}
