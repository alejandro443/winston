import {
  NewBusinessSubcategoryDto,
  UpdateBusinessSubcategoryDto,
} from 'src/core/shared/dto/BusinessSubcategory/business_subcategory_dto';
import { BusinessSubcategory } from 'src/domain/entities/BusinessSubcategory.entity';

export class BusinessSubcategoryRepository {
  constructor() {}

  async findOne(id_business_subcategory: number) {
    try {
      return BusinessSubcategory.findOne({ where: { id: id_business_subcategory } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return BusinessSubcategory.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(business_subcategory: NewBusinessSubcategoryDto) {
    try {
      return BusinessSubcategory.create(business_subcategory);
    } catch (error: any) {
      return error;
    }
  }

  async update(id_business_subcategory: any, business_subcategory: UpdateBusinessSubcategoryDto) {
    try {
      return BusinessSubcategory.update(business_subcategory, { where: { id: id_business_subcategory } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id_business_subcategory: number) {
    try {
      return BusinessSubcategory.destroy({ where: { id: id_business_subcategory } });
    } catch (error: any) {
      return error;
    }
  }
}
