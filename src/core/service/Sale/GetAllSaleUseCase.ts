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

      return response.map((sale: any) => ({
        id: sale.id,
        type_payment: sale.type_payment,
        currency: sale.currency,
        currency_symbol: sale.currency_symbol,
        note: sale.note,
        order_type: OrderTypes[sale.order_type],
        total: sale.total_sale
      }));
    } catch (error: any) {
      return error;
    }
  }

  async getAllReceivable() {
    try {
      const response: any = await this.saleService?.getAllReceivable();

      const response_transformed: any = response.map((sale: any) => {
        const sale_data: any = sale.toJSON();
        let objectEntity: object = {};
        console.log(sale_data)
      });

      return response_transformed;
    } catch (error: any) {
      return error;
    }
  }
}
