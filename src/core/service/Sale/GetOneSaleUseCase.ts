import { SaleService } from 'src/domain/services/SaleService/SaleService';

export class GetOneSaleUseCase {
  constructor(private saleService?: SaleService) {
    this.saleService = new SaleService();
  }

  async getOneSale(id: number) {
    try {
      const response: any = await this.saleService?.getOneSale(id);
      return response;
    } catch (error: any) {
      return error;
    }
  }

  async getOneDetails(id: number) {
    try {
      const response: any = await this.saleService?.getOneDetailSale(id);
      const response_data: any = response.map((data: any) => {
        const data_json: any = data.toJSON();
        var client = data_json.sale.client.type_entity == 'company' ?
          data_json.sale.client.company :
          data_json.sale.client.person;

        return {
          type_entity: data_json.sale.client.type_entity,
          client_name: client?.name || '',
          client_main_phone: client?.main_phone || '',
          type_document: data_json.type_document,
          voucher_number: `${data_json.serie} - ${data_json.correlative}`,
          submission_status: data_json.submission_status,
          currency: data_json.sale.currency,
          sale_date: data_json.sale.sale_date,
          sold_by: data_json.sale.soldBy.user,
          seller_assigned: data_json.sale.seller.user,
          products: data_json.sale.saleDetails.map((product)=>({
            amount: product.amount,
            product_price: product.product_price,
            product_subtotal: product.product_subtotal,
            product_discount: product.product_discount,
            product_total: product.product_total,
            product_name: product.product?.trade_name || ''
          }))
        }
      })
      return response_data;
    } catch (error: any) {
      return error;
    }
  }
}
