import { ProductApplicationError } from '@src/core/shared/error/ProductApplicationError';
import { ProductService } from 'src/domain/services/ProductService/ProductService';

export class GetOneProductUseCase {
  constructor(private service?: ProductService) {
    this.service = new ProductService();
  }

  async getOneProduct(id: number) {
    try {
      const response: any = await this.service?.getOneProduct(id);
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
      return error;
    }
  }
  
  async getOneProductWithPriceList(id: number) {
    try {
      const response: any = await this.service?.getOneProductWithPriceList(id);
      return response;
    } catch (error: any) {
      throw new ProductApplicationError(error, 'INTERNAL_SERVER_ERROR');
    }
  }
}
