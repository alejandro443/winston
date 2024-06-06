import { NewMethodPaymentDto } from 'src/core/shared/dto/MethodPayment/method_payment_dto';
import { MethodPaymentRepository } from 'src/domain/repositories/MethodPaymentRepository/MethodPaymentRepository';

export class MethodPaymentService {
  constructor(private repository?: MethodPaymentRepository) {
    this.repository = new MethodPaymentRepository();
  }

  async getOneMethodPayment(code: string) {
    try {
      return this.repository?.findOne(code);
    } catch (error: any) {
      return error;
    }
  }

  async getAllMethodPayment() {
    try {
      return this.repository?.findAll();
    } catch (error: any) {
      return error;
    }
  }

  async createMethodPayment(method_payment: NewMethodPaymentDto) {
    try {
      return this.repository?.create(method_payment);
    } catch (error: any) {
      return error;
    }
  }

  async updateMethodPayment(code: any, method_payment: NewMethodPaymentDto) {
    try {
      return this.repository?.update(code, method_payment);
    } catch (error: any) {
      return error;
    }
  }

  async deleteMethodPayment(code: string) {
    try {
      return this.repository?.deleted(code);
    } catch (error: any) {
      return error;
    }
  }
}
