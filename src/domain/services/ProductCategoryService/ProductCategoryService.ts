import { NewProductCategoryDto } from 'src/core/shared/dto/ProductCategory/product_category_dto';
import { ProductCategoryRepository } from 'src/domain/repositories/ProductCategoryRepository/ProductCategoryRepository';

export class ProductCategoryService {
  constructor(private repository?: ProductCategoryRepository) {
    this.repository = new ProductCategoryRepository();
  }

  async getOneProductCategory(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      return error;
    }
  }

  async getAllProductCategory() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createProductCategory(product_category: NewProductCategoryDto) {
    try {
      return this.repository?.create(product_category);
    } catch (error: any) {
      return error;
    }
  }

  async updateProductCategory(id: any, product_category: NewProductCategoryDto) {
    try {
      return this.repository?.update(id, product_category);
    } catch (error: any) {
      return error;
    }
  }

  async deleteProductCategory(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      return error;
    }
  }
}
