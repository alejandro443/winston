import { SaleService } from 'src/domain/services/SaleService/SaleService';

export class DeleteSaleUseCase {
  constructor(private saleService?: SaleService) {
    this.saleService = new SaleService();
  }

  async deleteSale(id: number) {
    try {
      const response: any =
        await this.saleService?.deleteSale(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
