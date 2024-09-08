import { OrderTypes } from '@src/infraestructure/shared/enums/OrderTypes';
import { SaleService } from 'src/domain/services/SaleService/SaleService';

export class GetAllSaleUseCase {
  constructor(private saleService?: SaleService) {
    this.saleService = new SaleService();
  }

  async getAllSale() {
    try {
      const response: any =
        await this.saleService?.getAllSale();

      return response.map((classification: any) => ({
        id: classification.id,
        type_payment: classification.type_payment,
        currency: classification.currency,
        currency_symbol: classification.currency_symbol,
        note: classification.note,
        order_type: OrderTypes[classification.order_type],
        total: classification.total_sale
      }));
    } catch (error: any) {
      return error;
    }
  }
}
