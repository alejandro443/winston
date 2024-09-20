import { QuotaPaymentApplicationError } from "@src/core/shared/error/QuotaPaymentApplicationError";
import { QuotaPaymentService } from "@src/domain/services/QuotaPaymenService/QuotaPaymentService";

export class FindAllUseCase {
  constructor(private paymentQuotaService?: QuotaPaymentService) {
    this.paymentQuotaService = new QuotaPaymentService();
  }

  async find_all(id: number | string) {
    try {
      const response: any = await this.paymentQuotaService?.ServiceFindAll(id);
      return response;
    } catch (error: any) {
      throw new QuotaPaymentApplicationError(error);
    }
  }
}
