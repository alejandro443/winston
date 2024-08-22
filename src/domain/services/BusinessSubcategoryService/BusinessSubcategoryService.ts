import { NewBusinessSubcategoryDto } from 'src/core/shared/dto/BusinessSubcategory/business_subcategory_dto';
import { BusinessSubcategoryRepository } from 'src/domain/repositories/BusinessSubcategoryRepository/BusinessSubcategoryRepository';

export class BusinessSubcategoryService {
  constructor(private repository?: BusinessSubcategoryRepository) {
    this.repository = new BusinessSubcategoryRepository();
  }

  async getOneBusinessSubcategory(id_business_subcategory: number) {
    try {
      return this.repository?.findOne(id_business_subcategory);
    } catch (error: any) {
      return error;
    }
  }

  async getAllBusinessSubcategory() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createBusinessSubcategory(business_subcategory: NewBusinessSubcategoryDto) {
    try {
      return this.repository?.create(business_subcategory);
    } catch (error: any) {
      return error;
    }
  }

  async updateBusinessSubcategory(id_business_subcategory: any, business_subcategory: NewBusinessSubcategoryDto) {
    try {
      return this.repository?.update(id_business_subcategory, business_subcategory);
    } catch (error: any) {
      return error;
    }
  }

  async deleteBusinessSubcategory(id_business_subcategory: number) {
    try {
      return this.repository?.deleted(id_business_subcategory);
    } catch (error: any) {
      return error;
    }
  }
}
