import { MethodPaymentService } from 'src/domain/services/MethodPaymentService/MethodPaymentService';

export class DeleteMethodPaymentUseCase {
  constructor(private methodPaymentService?: MethodPaymentService) {
    this.methodPaymentService = new MethodPaymentService();
  }

  async deleteMethodPayment(code: string) {
    try {
      const response: any =
        await this.methodPaymentService?.deleteMethodPayment(code);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
