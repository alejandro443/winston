import { UpdateBusinessSubcategoryDto } from 'src/core/shared/dto/BusinessSubcategory/business_subcategory_dto';
import { BusinessSubcategoryService } from 'src/domain/services/BusinessSubcategoryService/BusinessSubcategoryService';

export class UpdateBusinessSubcategoryUseCase {
  constructor(private businessSubcategoryService?: BusinessSubcategoryService) {
    this.businessSubcategoryService = new BusinessSubcategoryService();
  }

  async updateBusinessSubcategory(
    id_business_subcategory: number,
    businessSubcategory: UpdateBusinessSubcategoryDto,
  ) {
    try {
      const response: any =
        await this.businessSubcategoryService?.updateBusinessSubcategory(
          id_business_subcategory,
          businessSubcategory,
        );
      return {
        id: response.id,
        name: response.name,
        description: response.description,
        id_business_subcategory: response.id_business_subcategory,
        name_business_subcategory: response.name_business_subcategory,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
