import { MethodPaymentService } from 'src/domain/services/MethodPaymentService/MethodPaymentService';

export class DeleteMethodPaymentUseCase {
  constructor(private methodPaymentService?: MethodPaymentService) {
    this.methodPaymentService = new MethodPaymentService();
  }

  async deleteMethodPayment(id: number) {
    try {
      const response: any =
        await this.methodPaymentService?.deleteMethodPayment(id);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
