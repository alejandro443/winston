import {
  AllMethodPaymentDto,
  NewMethodPaymentDto,
  OneMethodPaymentDto,
  UpdateMethodPaymentDto,
} from 'src/core/shared/dto/MethodPayment/method_payment_dto';

export interface MethodPaymentApplication {
  getAllMethodPayment(): Promise<Array<AllMethodPaymentDto>>;
  getOneMethodPayment(id: number): Promise<OneMethodPaymentDto>;
  createMethodPayment(method_payment: NewMethodPaymentDto): Promise<OneMethodPaymentDto>;
  updateMethodPayment(
    id: number,
    method_payment: UpdateMethodPaymentDto,
  ): Promise<OneMethodPaymentDto>;
  deleteMethodPayment(id: number): any;
}
