import { ProductService } from 'src/domain/services/ProductService/ProductService';
import { NewProductDto } from 'src/core/shared/dto/Product/product_dto';

export class CreateProductUseCase {
  constructor(private productService?: ProductService) {
    this.productService = new ProductService();
  }

  async createProduct(product: NewProductDto) {
    try {
      const response: any = await this.productService?.createProduct(product);
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        image: response.image,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
