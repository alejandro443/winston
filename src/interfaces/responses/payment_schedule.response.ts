import { ApiProperty } from '@nestjs/swagger';
import { PaymentScheduleDto } from '@src/core/shared/dto/PaymentSchedule/payment_schedule_dto';
import { AppResponse } from '@src/infraestructure/responses/app.response';
import { OnlyAllPaymentResponseDto } from '../response_dto/PaymentSchedule/all_payments.dto';
import { SimulationResponseDto } from '../response_dto/PaymentSchedule/simulation.dto';

export class PaymentScheduleResponse extends AppResponse {
  @ApiProperty({
    type: PaymentScheduleDto,
    nullable: true,
  })
  data?: object;
}

export class PaymentSchedulesResponse extends AppResponse {
  @ApiProperty({
    type: [PaymentScheduleDto],
    nullable: true,
  })
  data?: PaymentScheduleDto[];
}

export class SimulationResponse extends AppResponse {
  @ApiProperty({
    type: [SimulationResponseDto],
    nullable: true,
  })
  data?: SimulationResponseDto[];
}

export class OnlyAllPaymentResponse extends AppResponse {
  @ApiProperty({
    type: [OnlyAllPaymentResponseDto],
    nullable: true,
  })
  data?: OnlyAllPaymentResponseDto[];
}
