import { ProductApplicationError } from '@src/core/shared/error/ProductApplicationError';
import { ListPriceProductService } from '@src/domain/services/ListPriceProductService/ListPriceProductService';
import { NewProductWithListPriceDto } from 'src/core/shared/dto/Product/product_dto';
import { ProductService } from 'src/domain/services/ProductService/ProductService';

export class UpdateProductUseCase {
  constructor(
    private productService?: ProductService,
    private listPriceProductService?: ListPriceProductService
  ) {
    this.productService = new ProductService();
    this.listPriceProductService = new ListPriceProductService();
  }

  async updateProduct(id: number, product: NewProductWithListPriceDto) {
    try {
      const response: any = await this.productService?.updateProduct(id, product);
      if(product.list_prices){
        product.list_prices.map(async (price_list) => {
          const list_id: any = price_list.list_price_id ? price_list.list_price_id : 1;
          await this.listPriceProductService?.update(list_id, price_list)
        })
      }
      return response;
    } catch (error: any) {
      throw new ProductApplicationError(error)
    }
  }
}
