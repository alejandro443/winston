import { ProductCategoryService } from 'src/domain/services/ProductCategoryService/ProductCategoryService';

export class GetOneProductCategoryUseCase {
  constructor(private product_categoryService?: ProductCategoryService) {
    this.product_categoryService = new ProductCategoryService();
  }

  async getOneProductCategory(id: number) {
    try {
      const response: any =
        await this.product_categoryService?.getOneProductCategory(id);
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
