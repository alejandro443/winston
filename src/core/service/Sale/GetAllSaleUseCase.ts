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

  async getAllReceivable(filters: any) {
    try {

      const endDate = new Date();
      const startDate = new Date(endDate);
      startDate.setDate(endDate.getDate() - 7);

      filters.startDate = filters.startDate ? filters.startDate : startDate;
      filters.endDate = filters.endDate ? filters.endDate : endDate;

      const response: any = await this.saleService?.getAllReceivable(filters);

      const response_transformed: any = response.map((sale: any) => {
        return {
          sale_paid: sale.paid,
          sale_date: sale.sale_date,
          client_name: sale.client.person.name,
          client_phone: sale.client.person.main_phone,
          type_document: sale.saleDocument.type_document,
          document_serie: sale.saleDocument.serie + ' - ' + sale.saleDocument.correlative,
          asssigned_seller: sale.client.seller.user,
          payment_last_date: sale.salePaymentSchedule.payment_last_date,
          total_sale: sale.total_sale,
          balance_paid: sale.salePaymentSchedule.total_payments,
          outstanding_balance: sale.total_sale - sale.salePaymentSchedule.total_payments,
          number_quotas: sale.salePaymentSchedule.number_quotas
        };
      });

      return response_transformed;
    } catch (error: any) {
      return error;
    }
  }
}
