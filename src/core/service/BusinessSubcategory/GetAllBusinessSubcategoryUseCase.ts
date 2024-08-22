import { BusinessSubcategoryService } from 'src/domain/services/BusinessSubcategoryService/BusinessSubcategoryService';

export class GetAllBusinessSubcategoryUseCase {
  constructor(private businessSubcategoryService?: BusinessSubcategoryService) {
    this.businessSubcategoryService = new BusinessSubcategoryService();
  }

  async getAllBusinessSubcategory() {
    try {
      const response: any =
        await this.businessSubcategoryService?.getAllBusinessSubcategory();

      return response.map((businessSubcategory: any) => ({
        id: businessSubcategory.id,
        name: businessSubcategory.name,
        description: businessSubcategory.description,
        id_business_turn: businessSubcategory.id_business_turn,
        name_business_turn: businessSubcategory.name_business_turn,
        status: businessSubcategory.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
