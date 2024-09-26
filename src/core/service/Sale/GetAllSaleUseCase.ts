import { date_for_view } from '@src/core/libraries/date';
import { OrderTypes } from '../../../infraestructure/shared/enums/OrderTypes';
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
          sale_id: sale.id,
          sale_crypto_uuid: sale.crypto_uuid,
          sale_paid: sale.paid,
          sale_date: date_for_view(sale.sale_date),
          client_name: sale.client.person.name,
          client_phone: sale.client.person.main_phone,
          type_document: sale.saleDocument.type_document,
          document_serie: sale.saleDocument.serie + ' - ' + sale.saleDocument.correlative,
          asssigned_seller: sale.client.seller.user,
          payment_last_date: date_for_view(sale.salePaymentSchedule.payment_last_date),
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

  async getElectronicReceipts(filters: any) {
    try {
      const response: any = await this.saleService?.getElectronicReceipts(filters);

      const response_data: any = response.map((data: any) => {
        const data_json: any = data.toJSON();
        var client = data_json.sale.client.type_entity == 'company' ?
          data_json.sale.client.company :
          data_json.sale.client.person;

        return {
          sale_id: data_json.sale_id,
          type_entity: data_json.sale.client.type_entity,
          client_name: client?.name || '',
          client_main_phone: client?.main_phone || '',
          client_main_identification: client?.main_identification || '',
          type_document: data_json.type_document,
          voucher_number: `${data_json.serie} - ${data_json.correlative}`,
          submission_status: data_json.submission_status,
          currency: data_json.sale.currency,
          sale_date: date_for_view(data_json.sale.sale_date),
          issuance_date: date_for_view(data_json.issuance_date),
          sold_by: data_json.sale.soldBy.user,
          seller_assigned: data_json.sale.seller.user,
          total_sale: data_json.sale.total_sale
        }
      })
      return response_data;
    } catch (error: any) {
      console.log(error)
      return error;
    }
  }
}
