import { QuotaPaymentApplicationError } from '@src/core/shared/error/QuotaPaymentApplicationError';
import { QuotaPaymentRepository } from '@src/domain/repositories/QuotaPaymentRepository/QuotaPaymentRepository';

export class QuotaPaymentService {
  constructor(private repository?: QuotaPaymentRepository) {
    this.repository = new QuotaPaymentRepository();
  }

  async ServiceFindAll(payment_schedule_id: number | string ) {
    try {
      return this.repository?.findAll(payment_schedule_id);
    } catch (error: any) {
      throw new QuotaPaymentApplicationError(error);
    }
  }

  async ServiceCreate(body: any) {
    try {
      return this.repository?.createOne(body);
    } catch (error: any) {
      throw new QuotaPaymentApplicationError(error);
    }
  }
}
