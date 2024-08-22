import {
  AllBusinessSubcategoryDto,
  NewBusinessSubcategoryDto,
  OneBusinessSubcategoryDto,
  UpdateBusinessSubcategoryDto,
} from 'src/core/shared/dto/BusinessSubcategory/business_subcategory_dto';

export interface BusinessSubcategoryApplication {
  getAllBusinessSubcategory(): Promise<Array<AllBusinessSubcategoryDto>>;
  getOneBusinessSubcategory(id_business_subcategory: number): Promise<OneBusinessSubcategoryDto>;
  createBusinessSubcategory(
    business_subcategory: NewBusinessSubcategoryDto,
  ): Promise<OneBusinessSubcategoryDto>;
  updateBusinessSubcategory(
    id_business_subcategory: number,
    business_subcategory: UpdateBusinessSubcategoryDto,
  ): Promise<OneBusinessSubcategoryDto>;
  deleteBusinessSubcategory(id_business_subcategory: number): any;
}
