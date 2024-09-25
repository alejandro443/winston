import { PickType } from '@nestjs/swagger';
import { QuotaPaymentDto } from '@src/core/shared/dto/QuotaPayment/quota_payment_dto';

export class GetQuotaPaymentRequestDto extends PickType(QuotaPaymentDto, ['id'] as const) { }