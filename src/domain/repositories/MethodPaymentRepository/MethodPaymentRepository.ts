import {
  NewMethodPaymentDto,
  UpdateMethodPaymentDto,
} from 'src/core/shared/dto/MethodPayment/method_payment_dto';
import { MethodPayment } from 'src/domain/entities/MethodPayment.entity';

export class MethodPaymentRepository {
  constructor() {}

  async findOne(code: string) {
    try {
      return MethodPayment.findOne({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async findAll() {
    try {
      return MethodPayment.findAll({ where: { deleted_at: null } });
    } catch (error: any) {
      return error;
    }
  }

  async create(method_payment: NewMethodPaymentDto) {
    try {
      return MethodPayment.create(method_payment);
    } catch (error: any) {
      return error;
    }
  }

  async update(code: any, method_payment: UpdateMethodPaymentDto) {
    try {
      return MethodPayment.update(method_payment, { where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(code: string) {
    try {
      return MethodPayment.destroy({ where: { code: code } });
    } catch (error: any) {
      return error;
    }
  }
}
