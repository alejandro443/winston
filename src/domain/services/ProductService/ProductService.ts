import { ProductApplicationError } from '@src/core/shared/error/ProductApplicationError';
import { GenerateCodeProduct, GenerateRandomCodeProduct } from '@src/core/shared/functions/generate_code_product.function';
import { NewProductDto } from 'src/core/shared/dto/Product/product_dto';
import { ProductRepository } from 'src/domain/repositories/ProductRepository/ProductRepository';

export class ProductService {
  constructor(private repository?: ProductRepository) {
    this.repository = new ProductRepository();
  }

  async getOneProduct(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      return error;
    }
  }

  async getAllProduct() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createProduct(product: NewProductDto) {
    try {
      product.code = product.code
        ? await GenerateCodeProduct(product.code)
        : await GenerateRandomCodeProduct();

      const product_new: any = this.repository?.create(product);
      return product_new;
    } catch (error: any) {
      throw new ProductApplicationError(error)
    }
  }

  async updateProduct(id: any, product: NewProductDto) {
    try {
      const product_update: any = await this.repository?.update(id, product);
      return product_update;
    } catch (error: any) {
      throw new ProductApplicationError(error)
    }
  }

  async deleteProduct(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      return error;
    }
  }
  
  async findAllByCategories(product_category_id: number) {
    try {
      return this.repository?.findAllByCategories(product_category_id);
    } catch (error: any) {
      return error;
    }
  }
}
