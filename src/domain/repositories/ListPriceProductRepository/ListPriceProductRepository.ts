import {
  NewDto,
  UpdateDto,
} from 'src/core/shared/dto/ListPriceProduct/list_price_product_dto';
import { ListPriceProduct } from 'src/domain/entities/ListPriceProduct.entity';

export class ListPriceProductRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return ListPriceProduct.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return ListPriceProduct.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(body: NewDto) {
    try {
      return ListPriceProduct.create(body);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: number, body: UpdateDto) {
    try {
      return ListPriceProduct.update(body, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return ListPriceProduct.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
