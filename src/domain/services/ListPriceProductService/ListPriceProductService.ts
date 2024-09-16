import { NewDto, UpdateDto } from 'src/core/shared/dto/ListPriceProduct/list_price_product_dto';
import { ListPriceProductRepository } from 'src/domain/repositories/ListPriceProductRepository/ListPriceProductRepository';

export class ListPriceProductService {
  constructor(private repository?: ListPriceProductRepository) {
    this.repository = new ListPriceProductRepository();
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

  async update(id: number, body: UpdateDto) {
    try {
      const update_data: any = await this.repository?.update(id, body);
      return update_data;
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

  async getByListPrice(product_ids: Array<number>, price_list_id: number) {
    try {
      return this.repository?.getAllByListPrice(product_ids, price_list_id);
    } catch (error: any) {
      return error;
    } 
  }
}
