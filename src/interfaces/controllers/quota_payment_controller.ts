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
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { QUOTA_PAYMENT_APPLICATION } from 'src/core/shared/constants/application.constants';
import { QuotaPaymentApplication } from 'src/core/application/QuotaPayment/QuotaPaymentApplication';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';
import { QuotaPaymentDto } from '@src/core/shared/dto/QuotaPayment/quota_payment_dto';
import { CreateQuotaPaymentRequestDto } from '../request_dto/QuotaPaymentDto/create.dto';
import { QuotaPaymentResponse, QuotaPaymentsResponse } from '../responses/quota_payment.response';

@ApiTags('Quota Payment')
@Controller('/quota_payment')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server.' })
@Auth()
export class QuotaPaymentController {
  constructor(
    @Inject(QUOTA_PAYMENT_APPLICATION)
    private application: QuotaPaymentApplication,
  ) { }

  @ApiBadGatewayResponse({ description: 'Invalid Id.' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: QuotaPaymentsResponse,
  })
  @HttpCode(200)
  @Get('/all/:payment_schedule_id')
  async GetQuotaPayment(
    // TODO: El tipo del params, hacerlo correctamente
    @Param() params: any,
  ): Promise<QuotaPaymentsResponse> {
    const data = await this.application.find_all(params.payment_schedule_id);
    return {
      status: 200,
      message: `Ok`,
      data: data,
    };
  }

  @ApiBadGatewayResponse({ description: 'Invalid Body.' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: QuotaPaymentResponse,
  })
  @HttpCode(200)
  @Post()
  async CreateQuotaPayment(
    // TODO: El tipo del params, hacerlo correctamente
    @Body() request: CreateQuotaPaymentRequestDto,
  ): Promise<QuotaPaymentResponse> {
    const data = await this.application.create_one(request);
    return {
      status: 200,
      message: `Ok`,
      data: data,
    };
  }
}
