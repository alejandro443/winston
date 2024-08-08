import {
  AllProductCategoryDto,
  NewProductCategoryDto,
  OneProductCategoryDto,
  UpdateProductCategoryDto,
} from '@src/core/shared/dto/ProductCategory/product_category_dto';
export interface ProductCategoryApplication {
  getAllProductCategory(): Promise<Array<AllProductCategoryDto>>;
  getFathersProductCategory(): Promise<Array<AllProductCategoryDto>>;
  getOneProductCategory(id: any): Promise<OneProductCategoryDto>;
  createProductCategory(
    rol: NewProductCategoryDto,
  ): Promise<OneProductCategoryDto>;
  updateProductCategory(
    id: any,
    rol: UpdateProductCategoryDto,
  ): Promise<OneProductCategoryDto>;
  deleteProductCategory(id: any): any;
}
