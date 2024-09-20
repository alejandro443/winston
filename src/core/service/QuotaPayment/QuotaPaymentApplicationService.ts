import { QuotaPaymentApplication } from 'src/core/application/QuotaPayment/QuotaPaymentApplication';
import { FindAllUseCase } from './FindAllUseCase';
import { QuotaPaymentApplicationError } from '@src/core/shared/error/QuotaPaymentApplicationError';
import { CreateUseCase } from './CreateUseCase';

export class QuotaPaymentApplicationService
  implements QuotaPaymentApplication {
  constructor(
    private findAllUseCase?: FindAllUseCase,
    private createUseCase?: CreateUseCase,
  ) {
    this.findAllUseCase = new FindAllUseCase();
    this.createUseCase = new CreateUseCase();
  }

  async find_all(id: number | string) {
    try {
      const response: any = await this.findAllUseCase?.find_all(id);
      return response;
    } catch (error: any) {
      throw new QuotaPaymentApplicationError(error);
    }
  }

  async create_one(body: any) {
    try {
      const response: any = await this.createUseCase?.create(body);
      return response;
    } catch (error: any) {
      throw new QuotaPaymentApplicationError(error);
    }
  }
}
