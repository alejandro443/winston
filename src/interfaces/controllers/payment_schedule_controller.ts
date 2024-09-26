import {
  Body,
  Controller,
  Get,
  HttpCode,
  Inject,
  Param,
  Post,
  UseFilters,
} from '@nestjs/common';
import {
  ApiBadGatewayResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { PAYMENT_SCHEDULE_APPLICATION } from 'src/core/shared/constants/application.constants';
import { PaymentScheduleApplication } from 'src/core/application/PaymentSchedule/PaymentScheduleApplication';
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

  // @ApiCreatedResponse({
  //   description: 'The record has been successfully obtain.',
  //   type: UbigeosResponse,
  // })
  @ApiBadGatewayResponse({ description: 'Invalid Simulation.' })
  @HttpCode(200)
  @Post('/schedule_simulation')
  async ScheduleSimulation(
    @Body() body: any,
  ): Promise<any> {
    const payment_schedule = await this.application.schedule_simulation(body);
    return {
      status: 200,
      message: `Ok`,
      data: payment_schedule,
    };
  }

  // @ApiCreatedResponse({
  //   description: 'The record has been successfully obtain.',
  //   type: UbigeosResponse,
  // })
  @ApiBadGatewayResponse({ description: 'Invalid Simulation.' })
  @HttpCode(200)
  @Get('/details_schedule/:sale_id')
  async DetailsSchedule(
    // TODO: El tipo del params, hacerlo correctamente
    @Param() params: any,
  ): Promise<any> {
    const payment_schedule = await this.application.details_schedule(params.sale_id);
    return {
      status: 200,
      message: `Ok`,
      data: payment_schedule,
    };
  }
  
  // @ApiCreatedResponse({
  //   description: 'The record has been successfully obtain.',
  //   type: UbigeosResponse,
  // })
  @ApiBadGatewayResponse({ description: 'Invalid Simulation.' })
  @HttpCode(200)
  @Get('/all_payments/:sale_id')
  async AllPayments(
    // TODO: El tipo del params, hacerlo correctamente
    @Param() params: any,
  ): Promise<any> {
    const payment_schedule = await this.application.all_payments(params.sale_id);
    return {
      status: 200,
      message: `Ok`,
      data: payment_schedule,
    };
  }
}
