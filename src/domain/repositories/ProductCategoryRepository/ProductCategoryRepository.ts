import {
  NewProductCategoryDto,
  UpdateProductCategoryDto,
} from 'src/core/shared/dto/ProductCategory/product_category_dto';
import { ProductCategory } from 'src/domain/entities/ProductCategory.entity';

export class ProductCategoryRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return ProductCategory.findOne({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return ProductCategory.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(product_category: NewProductCategoryDto) {
    try {
      return ProductCategory.create(product_category);
    } catch (error: any) {
      return error;
    }
  }

  async update(id: number, product_category: UpdateProductCategoryDto) {
    try {
      return ProductCategory.update(product_category, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return ProductCategory.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
