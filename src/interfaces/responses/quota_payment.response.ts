import { ApiProperty } from '@nestjs/swagger';
import { QuotaPaymentDto } from '@src/core/shared/dto/QuotaPayment/quota_payment_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class QuotaPaymentResponse extends AppResponse {
  @ApiProperty({
    type: QuotaPaymentDto,
    nullable: true,
  })
  data?: object;
}

export class QuotaPaymentsResponse extends AppResponse {
  @ApiProperty({
    type: [QuotaPaymentDto],
    nullable: true,
  })
  data?: QuotaPaymentDto[];
}
