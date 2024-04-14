import {
  AllProductDto,
  NewProductDto,
  OneProductDto,
  UpdateProductDto,
} from '@src/core/shared/dto/Product/product_dto';
export interface ProductApplication {
  getAllProduct(): Promise<Array<AllProductDto>>;
  getOneProduct(id: any): Promise<OneProductDto>;
  createProduct(rol: NewProductDto): Promise<OneProductDto>;
  updateProduct(id: any, rol: UpdateProductDto): Promise<OneProductDto>;
  deleteProduct(id: any): any;
}
