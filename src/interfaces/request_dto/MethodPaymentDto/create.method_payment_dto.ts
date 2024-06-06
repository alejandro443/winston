import { OmitType } from '@nestjs/mapped-types';
import { MethodPaymentDto } from '@src/core/shared/dto/MethodPayment/method_payment_dto';

export class CreateMethodPaymentRequestDto extends
  OmitType(MethodPaymentDto, ['id', 'created_at'] as const) { }