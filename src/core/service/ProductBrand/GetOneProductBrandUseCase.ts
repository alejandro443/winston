import { ProductBrandService } from 'src/domain/services/ProductBrandService/ProductBrandService';

export class GetOneProductBrandUseCase {
  constructor(private product_brandService?: ProductBrandService) {
    this.product_brandService = new ProductBrandService();
  }

  async getOneProductBrand(id: number) {
    try {
      const response: any =
        await this.product_brandService?.getOneProductBrand(id);
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
