
import {
  AllProductBrandDto,
  NewProductBrandDto,
  OneProductBrandDto,
  UpdateProductBrandDto,
} from '@src/core/shared/dto/ProductBrand/product_brand_dto';
export interface ProductBrandApplication {
  getAllProductBrand(): Promise<Array<AllProductBrandDto>>;
  getOneProductBrand(id: any): Promise<OneProductBrandDto>;
  createProductBrand(rol: NewProductBrandDto): Promise<OneProductBrandDto>;
  updateProductBrand(id: any, rol: UpdateProductBrandDto): Promise<OneProductBrandDto>;
  deleteProductBrand(id: any): any;
}
