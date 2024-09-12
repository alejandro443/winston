import { NewDto } from 'src/core/shared/dto/ListPrice/list_price_dto';
import { ListPriceRepository } from 'src/domain/repositories/ListPriceRepository/ListPriceRepository';

export class ListPriceService {
  constructor(private repository?: ListPriceRepository) {
    this.repository = new ListPriceRepository();
  }

  async getOne(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      return error;
    }
  }

  async getAll() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async create(body: NewDto) {
    try {
      return this.repository?.create(body);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: number, body: NewDto) {
    try {
      return this.repository?.update(id, body);
    } catch (error: any) {
      return error;
    }
  }

  async delete(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      return error;
    }
  }

  async getAllActives() {
    try {
      return this.repository?.findAllActives();
    } catch (error: any) {
      return error;
    }
  }
}
