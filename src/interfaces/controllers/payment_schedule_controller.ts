import {
  Body,
  Controller,
  HttpCode,
  Inject,
  Param,
  Post,
  UseFilters,
} from '@nestjs/common';
import {
  ApiBadGatewayResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PAYMENT_SCHEDULE_APPLICATION } from 'src/core/shared/constants/application.constants';
import { PaymentScheduleApplication } from 'src/core/application/PaymentSchedule/PaymentScheduleApplication';
import { UbigeosResponse } from '../responses/ubigeo.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('Payment Schedule')
@Controller('/payment_schedule')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server.' })
@Auth()
export class PaymentScheduleController {
  constructor(
    @Inject(PAYMENT_SCHEDULE_APPLICATION)
    private application: PaymentScheduleApplication,
  ) { }

  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: UbigeosResponse,
  })
  @ApiBadGatewayResponse({ description: 'Invalid Simulation.' })
  @HttpCode(200)
  @Post('/schedule_simulation')
  async ScheduleSimulation(
    @Body() body: any,
  ): Promise<any> {
    const ubigeo = await this.application.schedule_simulation(body);
    return {
      status: 200,
      message: `Ok`,
      data: ubigeo,
    };
  }
}
