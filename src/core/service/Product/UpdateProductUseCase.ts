import { UpdateProductDto } from 'src/core/shared/dto/Product/product_dto';
import { ProductService } from 'src/domain/services/ProductService/ProductService';

export class UpdateProductUseCase {
  constructor(private productService?: ProductService) {
    this.productService = new ProductService();
  }

  async updateProduct(
    id: number,
    product: UpdateProductDto,
  ) {
    try {
      const response: any =
        await this.productService?.updateProduct(
          id,
          product,
        );
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
