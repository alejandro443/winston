import { ProductCategoryService } from 'src/domain/services/ProductCategoryService/ProductCategoryService';

export class GetFathersProductCategoryUseCase {
  constructor(private product_categoryService?: ProductCategoryService) {
    this.product_categoryService = new ProductCategoryService();
  }

  async getFathersProductCategory() {
    try {
      const response: any =
        await this.product_categoryService?.getFathersProductCategory();

      return response.map((product_category: any) => ({
        id: product_category.id,
        code: product_category.code,
        name: product_category.name,
        description: product_category.description,
        image: product_category.image,
        status: product_category.status,
        is_base: product_category.is_base,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
