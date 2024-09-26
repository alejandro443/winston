import { date_for_view, days_passed_since } from "@src/core/libraries/date";
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
          sale_date: date_for_view(data.sale.sale_date),
          quotas: data.paymentSchedule
        }

      });
      return data_response;
    } catch (error: any) {
      throw new PaymentScheduleApplicationError(error);
    }
  }

  async all_payments(sale_id: number | string) {
    try {
      const response: any = await this.paymentScheduleService?.ServiceFindAllPayments(sale_id);
      const data_response: any = response.paymentSchedule.map((data: any) => ({
        id: data.id,
        uuid: data.uuid,
        number_quota: data.number_quota,
        done: data.done,
        total_accumulated_payment: data.amount,
        payment_amount: data.payment_amount,
        payment_date: date_for_view(data.payment_date),
        days_late: days_passed_since(data.payment_date)
      }));
      return data_response;
    } catch (error: any) {
      throw new PaymentScheduleApplicationError(error);
    }
  }
}
