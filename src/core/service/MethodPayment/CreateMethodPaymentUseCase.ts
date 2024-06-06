import { MethodPaymentService } from 'src/domain/services/MethodPaymentService/MethodPaymentService';
import { NewMethodPaymentDto } from 'src/core/shared/dto/MethodPayment/method_payment_dto';

export class CreateMethodPaymentUseCase {
  constructor(private methodPaymentService?: MethodPaymentService) {
    this.methodPaymentService = new MethodPaymentService();
  }

  async createMethodPayment(methodPayment: NewMethodPaymentDto) {
    try {
      const response: any =
        await this.methodPaymentService?.createMethodPayment(methodPayment);
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
