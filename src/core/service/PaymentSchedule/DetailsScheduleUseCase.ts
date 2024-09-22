import { PaymentScheduleApplicationError } from "@src/core/shared/error/PaymentScheduleApplicationError";
import { PaymentScheduleService } from "@src/domain/services/PaymentScheduleService/PaymentScheduleService";

export class DetailsScheduleUseCase {
  constructor(private paymentScheduleService?: PaymentScheduleService) {
    this.paymentScheduleService = new PaymentScheduleService();
  }

  async details_schedule(sale_id: number | string) {
    try {
      const response: any = await this.paymentScheduleService?.ServiceFindAll(sale_id);
      const data_response: any = response.map((data: any) => {
        return {
          total_sale: data.sale.total_sale,
          seller: data.sale.seller.user,
          client: data.sale.client[data.sale.client.type_entity].name,
          sale_date: data.sale.sale_date,
          quotas: data.paymentSchedule
        }

      });
      return data_response;
    } catch (error: any) {
      throw new PaymentScheduleApplicationError(error);
    }
  }
}