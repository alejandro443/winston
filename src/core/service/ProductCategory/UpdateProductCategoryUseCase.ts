import { UpdateProductCategoryDto } from 'src/core/shared/dto/ProductCategory/product_category_dto';
import { ProductCategoryService } from 'src/domain/services/ProductCategoryService/ProductCategoryService';

export class UpdateProductCategoryUseCase {
  constructor(private product_categoryService?: ProductCategoryService) {
    this.product_categoryService = new ProductCategoryService();
  }

  async updateProductCategory(
    id: number,
    product_category: UpdateProductCategoryDto,
  ) {
    try {
      const response: any =
        await this.product_categoryService?.updateProductCategory(
          id,
          product_category,
        );
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
