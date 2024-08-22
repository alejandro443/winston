import { BusinessSubcategoryService } from 'src/domain/services/BusinessSubcategoryService/BusinessSubcategoryService';

export class DeleteBusinessSubcategoryUseCase {
  constructor(private businessSubcategoryService?: BusinessSubcategoryService) {
    this.businessSubcategoryService = new BusinessSubcategoryService();
  }

  async deleteBusinessSubcategory(id_business_subcategory: number) {
    try {
      const response: any =
        await this.businessSubcategoryService?.deleteBusinessSubcategory(id_business_subcategory);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
