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
      return this.repository?.create(product);
    } catch (error: any) {
      return error;
    }
  }

  async updateProduct(id: any, product: NewProductDto) {
    try {
      return this.repository?.update(id, product);
    } catch (error: any) {
      return error;
    }
  }

  async deleteProduct(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      return error;
    }
  }
}
