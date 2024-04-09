import { UpdateProductBrandDto } from 'src/core/shared/dto/ProductBrand/product_brand_dto';
import { ProductBrandService } from 'src/domain/services/ProductBrandService/ProductBrandService';

export class UpdateProductBrandUseCase {
  constructor(private product_brandService?: ProductBrandService) {
    this.product_brandService = new ProductBrandService();
  }

  async updateProductBrand(
    id: number,
    product_brand: UpdateProductBrandDto,
  ) {
    try {
      const response: any =
        await this.product_brandService?.updateProductBrand(
          id,
          product_brand,
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
