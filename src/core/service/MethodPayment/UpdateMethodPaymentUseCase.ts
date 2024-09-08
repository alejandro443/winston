import { UpdateMethodPaymentDto } from 'src/core/shared/dto/MethodPayment/method_payment_dto';
import { MethodPaymentService } from 'src/domain/services/MethodPaymentService/MethodPaymentService';

export class UpdateMethodPaymentUseCase {
  constructor(private method_paymentService?: MethodPaymentService) {
    this.method_paymentService = new MethodPaymentService();
  }

  async updateMethodPayment(id: number, method_payment: UpdateMethodPaymentDto) {
    try {
      const response: any = await this.method_paymentService?.updateMethodPayment(
        id,
        method_payment,
      );
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
