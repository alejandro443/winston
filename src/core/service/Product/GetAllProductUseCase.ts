import { ProductService } from 'src/domain/services/ProductService/ProductService';

export class GetAllProductUseCase {
  constructor(private productService?: ProductService) {
    this.productService = new ProductService();
  }

  async getAllProduct() {
    try {
      const response: any =
        await this.productService?.getAllProduct();

      return response.map((product: any) => ({
        id: product.id,
        code: product.code,
        name: product.name,
        description: product.description,
        image: product.image,
        status: product.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
