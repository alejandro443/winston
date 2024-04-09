import { ProductBrandService } from 'src/domain/services/ProductBrandService/ProductBrandService';

export class DeleteProductBrandUseCase {
  constructor(private product_brandService?: ProductBrandService) {
    this.product_brandService = new ProductBrandService();
  }

  async deleteProductBrand(id: number) {
    try {
      const response: any =
        await this.product_brandService?.deleteProductBrand(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
