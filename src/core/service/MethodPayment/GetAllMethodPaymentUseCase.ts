import { MethodPaymentService } from 'src/domain/services/MethodPaymentService/MethodPaymentService';

export class GetAllMethodPaymentUseCase {
  constructor(private methodPaymentService?: MethodPaymentService) {
    this.methodPaymentService = new MethodPaymentService();
  }

  async getAllMethodPayment() {
    try {
      const response: any = await this.methodPaymentService?.getAllMethodPayment();

      return response.map((methodPayment: any) => ({
        id: methodPayment.id,
        code: methodPayment.code,
        name: methodPayment.name,
        description: methodPayment.description,
        status: methodPayment.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
