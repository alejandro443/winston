import { OmitType } from '@nestjs/swagger';
import { MethodPaymentDto } from '@src/core/shared/dto/MethodPayment/method_payment_dto';

export class UpdateMethodPaymentRequestDto extends
  OmitType(MethodPaymentDto, ['id', 'created_at'] as const) { }