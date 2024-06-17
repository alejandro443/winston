import { PickType } from '@nestjs/swagger';
import { MethodPaymentDto } from '@src/core/shared/dto/MethodPayment/method_payment_dto';

export class GetMethodPaymentRequestDto extends PickType(MethodPaymentDto, ['code'] as const) { }