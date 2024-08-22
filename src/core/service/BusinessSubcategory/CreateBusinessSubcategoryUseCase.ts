import { BusinessSubcategoryService } from 'src/domain/services/BusinessSubcategoryService/BusinessSubcategoryService';
import { NewBusinessSubcategoryDto } from 'src/core/shared/dto/BusinessSubcategory/business_subcategory_dto';

export class CreateBusinessSubcategoryUseCase {
  constructor(private businessSubcategoryService?: BusinessSubcategoryService) {
    this.businessSubcategoryService = new BusinessSubcategoryService();
  }

  async createBusinessSubcategory(businessSubcategory: NewBusinessSubcategoryDto) {
    try {
      const response: any =
        await this.businessSubcategoryService?.createBusinessSubcategory(businessSubcategory);
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
