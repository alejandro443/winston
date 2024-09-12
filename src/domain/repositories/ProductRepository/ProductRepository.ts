import { ProductApplicationError } from '@src/core/shared/error/ProductApplicationError';
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
      throw new ProductApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async findAll() {
    try {
      return Product.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      throw new ProductApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async create(product: NewProductDto) {
    try {
      const product_data: any = await Product.create(product);
      return product_data;
    } catch (error: any) {
      throw new ProductApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async update(id: number, product: UpdateProductDto) {
    try {
      const product_data: any = await Product.update(product, { where: { id: id }, returning: true });
      return product_data;
    } catch (error: any) {
      throw new ProductApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }

  async deleted(id: number) {
    try {
      return Product.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAllByCategories(product_category_id: number) {
    try {
      return (await Product.findAll({ 
        attributes: ['id'],
        where: { product_category_id: product_category_id, deleted_at: null },
        raw: true
      })).map(product => product.id);
    } catch (error: any) {
      throw new ProductApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }
}
