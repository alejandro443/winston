import { NewDto } from 'src/core/shared/dto/ListPriceClient/list_price_client_dto';
import { ListPriceClientRepository } from 'src/domain/repositories/ListPriceClientRepository/ListPriceClientRepository';

export class ListPriceClientService {
  constructor(private repository?: ListPriceClientRepository) {
    this.repository = new ListPriceClientRepository();
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
}
