import { ApiProperty } from '@nestjs/swagger';
import { MethodPaymentDto } from '@src/core/shared/dto/MethodPayment/method_payment_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';

export class MethodPaymentResponse extends AppResponse {
  @ApiProperty({
    type: MethodPaymentDto,
    nullable: true,
  })
  data?: object;
}

export class TypesChannelsResponse extends AppResponse {
  @ApiProperty({
    type: [MethodPaymentDto],
    nullable: true,
  })
  data?: MethodPaymentDto[];
}
