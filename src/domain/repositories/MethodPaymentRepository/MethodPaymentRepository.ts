import {
  NewMethodPaymentDto,
  UpdateMethodPaymentDto,
} from 'src/core/shared/dto/MethodPayment/method_payment_dto';
import { MethodPayment } from 'src/domain/entities/MethodPayment.entity';

export class MethodPaymentRepository {
  constructor() {}

  async findOne(id: number) {
    try {
      return MethodPayment.findOne({ where: { id: id } });
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

  async update(id: number, method_payment: UpdateMethodPaymentDto) {
    try {
      return MethodPayment.update(method_payment, { where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }

  async deleted(id: number) {
    try {
      return MethodPayment.destroy({ where: { id: id } });
    } catch (error: any) {
      return error;
    }
  }
}
