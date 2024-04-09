import { ProductCategoryService } from 'src/domain/services/ProductCategoryService/ProductCategoryService';

export class DeleteProductCategoryUseCase {
  constructor(private product_categoryService?: ProductCategoryService) {
    this.product_categoryService = new ProductCategoryService();
  }

  async deleteProductCategory(id: number) {
    try {
      const response: any =
        await this.product_categoryService?.deleteProductCategory(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
