import { SaleService } from 'src/domain/services/SaleService/SaleService';

export class GetOneSaleUseCase {
  constructor(private saleService?: SaleService) {
    this.saleService = new SaleService();
  }

  async getOneSale(id: number) {
    try {
      const response: any =
        await this.saleService?.getOneSale(id);
      return {
        id: response.id,
      };
    } catch (error: any) {
      return error;
    }
  }
}
