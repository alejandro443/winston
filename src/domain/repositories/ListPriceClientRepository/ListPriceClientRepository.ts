import {
  NewDto,
  UpdateDto,
} from 'src/core/shared/dto/ListPriceClient/list_price_client_dto';
import { ListPriceClient } from 'src/domain/entities/ListPriceClient.entity';

export class ListPriceClientRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return ListPriceClient.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return ListPriceClient.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(body: NewDto) {
    try {
      return ListPriceClient.create(body);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: number, body: UpdateDto) {
    try {
      return ListPriceClient.update(body, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return ListPriceClient.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
