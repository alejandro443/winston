import {
  AllMethodPaymentDto,
  NewMethodPaymentDto,
  OneMethodPaymentDto,
  UpdateMethodPaymentDto,
} from 'src/core/shared/dto/MethodPayment/method_payment_dto';

export interface MethodPaymentApplication {
  getAllMethodPayment(): Promise<Array<AllMethodPaymentDto>>;
  getOneMethodPayment(code: any): Promise<OneMethodPaymentDto>;
  createMethodPayment(method_payment: NewMethodPaymentDto): Promise<OneMethodPaymentDto>;
  updateMethodPayment(
    code: any,
    method_payment: UpdateMethodPaymentDto,
  ): Promise<OneMethodPaymentDto>;
  deleteMethodPayment(code: any): any;
}