import { PaymentScheduleApplicationError } from '@src/core/shared/error/PaymentScheduleApplicationError';
import { PaymentScheduleRepository } from '@src/domain/repositories/PaymentScheduleRepository/PaymentScheduleRepository';

export class PaymentScheduleService {
  constructor(private repository?: PaymentScheduleRepository) {
    this.repository = new PaymentScheduleRepository();
  }

  async ServiceFindAll(sale_id: number | string ) {
    try {
      return this.repository?.findAll(sale_id);
    } catch (error: any) {
      throw new PaymentScheduleApplicationError(error);
    }
  }
}
