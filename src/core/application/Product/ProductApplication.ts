import {
  AllProductDto,
  NewProductDto,
  OneProductDto,
  UpdateProductDto,
} from '@src/core/shared/dto/Product/product_dto';
export interface ProductApplication {
  getAllProduct(): Promise<Array<AllProductDto>>;
  getOneProduct(id: any): Promise<OneProductDto>;
  createProduct(product: NewProductDto): Promise<OneProductDto>;
  updateProduct(id: any, product: UpdateProductDto): Promise<OneProductDto>;
  deleteProduct(id: any): any;

  getAllProductByCategoryAndListPrice(category_id: number, list_price_id: number): Promise<Array<AllProductDto>>;
  getOneProductWithPriceList(id: any): Promise<OneProductDto>;
  updateProductWithPriceList(id: any, product: UpdateProductDto): Promise<OneProductDto>;
}
