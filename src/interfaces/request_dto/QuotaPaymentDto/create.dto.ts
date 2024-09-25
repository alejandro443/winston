import { OmitType } from '@nestjs/swagger';
import { QuotaPaymentDto } from '@src/core/shared/dto/QuotaPayment/quota_payment_dto';

export class CreateQuotaPaymentRequestDto extends
  OmitType(QuotaPaymentDto, ['crypto_uuid', 'created_at'] as const) { }