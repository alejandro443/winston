import { ProductService } from 'src/domain/services/ProductService/ProductService';

export class DeleteProductUseCase {
  constructor(private productService?: ProductService) {
    this.productService = new ProductService();
  }

  async deleteProduct(id: number) {
    try {
      const response: any =
        await this.productService?.deleteProduct(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
