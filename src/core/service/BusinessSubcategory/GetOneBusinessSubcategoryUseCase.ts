import { BusinessSubcategoryService } from 'src/domain/services/BusinessSubcategoryService/BusinessSubcategoryService';

export class GetOneBusinessSubcategoryUseCase {
  constructor(private businessSubcategoryService?: BusinessSubcategoryService) {
    this.businessSubcategoryService = new BusinessSubcategoryService();
  }

  async getOneBusinessSubcategory(id_business_turn: number) {
    try {
      const response: any =
        await this.businessSubcategoryService?.getOneBusinessSubcategory(id_business_turn);
      return {
        id: response.id,
        name: response.name,
        description: response.description,
        id_business_turn: response.id_business_turn,
        name_business_turn: response.name_business_turn,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
