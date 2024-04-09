import { NewProductBrandDto } from 'src/core/shared/dto/ProductBrand/product_brand_dto';
import { ProductBrandRepository } from 'src/domain/repositories/ProductBrandRepository/ProductBrandRepository';

export class ProductBrandService {
  constructor(private repository?: ProductBrandRepository) {
    this.repository = new ProductBrandRepository();
  }

  async getOneProductBrand(id: number) {
    try {
      return this.repository?.findOne(id);
    } catch (error: any) {
      return error;
    }
  }

  async getAllProductBrand() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createProductBrand(product_brand: NewProductBrandDto) {
    try {
      return this.repository?.create(product_brand);
    } catch (error: any) {
      return error;
    }
  }

  async updateProductBrand(id: any, product_brand: NewProductBrandDto) {
    try {
      return this.repository?.update(id, product_brand);
    } catch (error: any) {
      return error;
    }
  }

  async deleteProductBrand(id: number) {
    try {
      return this.repository?.deleted(id);
    } catch (error: any) {
      return error;
    }
  }
}
