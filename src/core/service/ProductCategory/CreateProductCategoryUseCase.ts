import { ProductCategoryService } from 'src/domain/services/ProductCategoryService/ProductCategoryService';
import { NewProductCategoryDto } from 'src/core/shared/dto/ProductCategory/product_category_dto';

export class CreateProductCategoryUseCase {
  constructor(private product_categoryService?: ProductCategoryService) {
    this.product_categoryService = new ProductCategoryService();
  }

  async createProductCategory(product_category: NewProductCategoryDto) {
    try {
      const response: any =
        await this.product_categoryService?.createProductCategory(product_category);
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        image: response.image,
        status: response.status,
        is_base: response.is_base,
      };
    } catch (error: any) {
      return error;
    }
  }
}
