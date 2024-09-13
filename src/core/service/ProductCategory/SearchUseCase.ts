import { ProductCategoryService } from 'src/domain/services/ProductCategoryService/ProductCategoryService';

export class SearchUseCase {
  constructor(private product_categoryService?: ProductCategoryService) {
    this.product_categoryService = new ProductCategoryService();
  }

  async SearchProductCategory(searchTerm: String) {
    try {
      const response: any =
        await this.product_categoryService?.searchProductCategory(searchTerm);

      return response.map((product_category: any) => ({
        id: product_category.id,
        name: product_category.name,
        image: product_category.image,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
