import { ProductApplicationError } from '@src/core/shared/error/ProductApplicationError';
import { ListPriceProductService } from '@src/domain/services/ListPriceProductService/ListPriceProductService';
import { ProductService } from 'src/domain/services/ProductService/ProductService';

export class GetAllProductUseCase {
  constructor(
    private productService?: ProductService,
    private listPriceProductService?: ListPriceProductService
  ) {
    this.productService = new ProductService();
    this.listPriceProductService = new ListPriceProductService();
  }

  async getAllProduct() {
    try {
      const response: any = await this.productService?.getAllProduct();

      return response.map((product: any) => ({
        id: product.id,
        code: product.code,
        name: product.name,
        trade_name: product.trade_name,
        description: product.description,
        image: product.image,
        status: product.status,
      }));
    } catch (error: any) {
      return error;
    }
  }

  async getAllProductByCategoryAndListPrice(category_id: number, list_price_id: number) {
    try {
      const products_ids: any = await this.productService?.findAllByCategories(category_id);
      if(!products_ids.length) {return new ProductApplicationError("La categoria, no tiene productos asociados.");}

      const response: any = await this.listPriceProductService?.getByListPrice(products_ids, list_price_id);
      return response.map((product: any) => ({
        id: product['product.productId'],
        list_price_id: product.listPriceId,
        trade_name: product['product.productTradeName'],
        description: product['product.productDesc'],
        sku: product['product.productSKU'],
        image: product['product.productImage'],
        unit_price: product.unit_price,
        package_price: product.package_price,
        product_brand_id: product['product.productBrand.brandId'],
        product_brand_name: product['product.productBrand.brandName']
      }));
    } catch (error: any) {
      return error;
    }
  }
}
