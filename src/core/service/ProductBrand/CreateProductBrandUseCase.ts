import { ProductBrandService } from 'src/domain/services/ProductBrandService/ProductBrandService';
import { NewProductBrandDto } from 'src/core/shared/dto/ProductBrand/product_brand_dto';

export class CreateProductBrandUseCase {
  constructor(private product_brandService?: ProductBrandService) {
    this.product_brandService = new ProductBrandService();
  }

  async createProductBrand(product_brand: NewProductBrandDto) {
    try {
      const response: any =
        await this.product_brandService?.createProductBrand(product_brand);
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
