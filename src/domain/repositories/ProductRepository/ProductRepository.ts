import {
  NewProductDto,
  UpdateProductDto,
} from 'src/core/shared/dto/Product/product_dto';
import { Product } from 'src/domain/entities/Product.entity';

export class ProductRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return Product.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return Product.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(product: NewProductDto) {
    try {
      return Product.create(product);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: number, product: UpdateProductDto) {
    try {
      return Product.update(product, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return Product.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
