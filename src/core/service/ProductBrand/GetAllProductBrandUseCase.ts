import { ProductBrandService } from 'src/domain/services/ProductBrandService/ProductBrandService';

export class GetAllProductBrandUseCase {
  constructor(private product_brandService?: ProductBrandService) {
    this.product_brandService = new ProductBrandService();
  }

  async getAllProductBrand() {
    try {
      const response: any =
        await this.product_brandService?.getAllProductBrand();

      return response.map((product_brand: any) => ({
        id: product_brand.id,
        code: product_brand.code,
        name: product_brand.name,
        description: product_brand.description,
        image: product_brand.image,
        status: product_brand.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
