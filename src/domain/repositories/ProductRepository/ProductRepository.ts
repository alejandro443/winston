import { ProductApplicationError } from '@src/core/shared/error/ProductApplicationError';
import { ListPrice } from '@src/domain/entities/ListPrice.entity';
import { ListPriceProduct } from '@src/domain/entities/ListPriceProduct.entity';
import { Sequelize } from 'sequelize';
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

  async update(id: number, body: UpdateProductDto) {
    try {
      const [rowsUpdated, [updateData]] = await Product.update(body, {
        where: { id },
        returning: true,
      });

      if (rowsUpdated === 0) {
        throw new ProductApplicationError(`No se encontró registros.`, 'NOT_FOUND');
      }
  
      return updateData
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

  async findOneWithPriceLists(product_id: number) {
    try {
      const data: any = await ListPriceProduct.findAll({ 
        include: [
          { model: Product, required: true }, 
          { model: ListPrice, required: true } 
        ],
        where: { product_id: product_id }
      });

      return data;
    } catch (error: any) {
      throw new ProductApplicationError(error, 'INTERNAL_SERVER_ERROR')
    }
  }
}
