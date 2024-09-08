import { MethodPaymentService } from 'src/domain/services/MethodPaymentService/MethodPaymentService';

export class GetOneMethodPaymentUseCase {
  constructor(private methodPaymentService?: MethodPaymentService) {
    this.methodPaymentService = new MethodPaymentService();
  }

  async getOneMethodPayment(id: number) {
    try {
      const response: any =
        await this.methodPaymentService?.getOneMethodPayment(id);
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
