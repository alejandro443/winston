import { ProductService } from 'src/domain/services/ProductService/ProductService';
import { NewProductWithListPriceDto } from 'src/core/shared/dto/Product/product_dto';
import { ProductApplicationError } from '@src/core/shared/error/ProductApplicationError';
import { ListPriceProductService } from '@src/domain/services/ListPriceProductService/ListPriceProductService';

export class CreateProductUseCase {
  constructor(
    private productService?: ProductService,
    private listPriceProductService?: ListPriceProductService
  ) {
    this.productService = new ProductService();
    this.listPriceProductService = new ListPriceProductService();
  }

  async createProduct(product: NewProductWithListPriceDto) {
    const response: any = await this.productService?.createProduct(product);
    
    try {
      if(product.list_prices){
        product.list_prices.map(async (price_list) => {
          const list_id: any = price_list?.list_price_id ? price_list?.list_price_id : 1;
          await this.listPriceProductService?.create({
            list_price_id: list_id,
            product_id: response.id,
            unit_price: price_list.unit_price,
            package_price: price_list.package_price
          })
        })
      }

      return {
        id: response.id,
        code: response.code,
        name: response.name,
        trade_name: response.trade_name,
        description: response.description,
        image: response.image,
        status: response.status,
      };
    } catch (error: any) {
      throw new ProductApplicationError(error)
    }
  }
}
