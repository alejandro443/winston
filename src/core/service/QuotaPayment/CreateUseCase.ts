import { QuotaPaymentApplicationError } from "@src/core/shared/error/QuotaPaymentApplicationError";
import { QuotaPaymentService } from "@src/domain/services/QuotaPaymenService/QuotaPaymentService";

export class CreateUseCase {
  constructor(private paymentQuotaService?: QuotaPaymentService) {
    this.paymentQuotaService = new QuotaPaymentService();
  }

  async create(body: any) {
    try {
      const response: any = await this.paymentQuotaService?.ServiceCreate(body);
      return response;
    } catch (error: any) {
      throw new QuotaPaymentApplicationError(error);
    }
  }
}
