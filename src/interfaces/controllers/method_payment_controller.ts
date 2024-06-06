import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  Param,
  Post,
  Put,
  UseFilters,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { METHOD_PAYMENT_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetMethodPaymentRequestDto } from '../request_dto/MethodPaymentDto/get.method_payment_dto';
import { CreateMethodPaymentRequestDto } from '../request_dto/MethodPaymentDto/create.method_payment_dto';
import { MethodPaymentApplication } from 'src/core/application/MethodPayment/MethodPaymentApplication';
import { MethodPaymentResponse } from '../responses/method_payment.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('MethodPayment')
@Controller('/method_payment')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class MethodPaymentController {
  constructor(
    @Inject(METHOD_PAYMENT_APPLICATION)
    private application: MethodPaymentApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid method_payment code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: MethodPaymentResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllMethodPayment(): Promise<MethodPaymentResponse> {
    Log.info(`(Get) Get all method_payments`);

    const method_payments = await this.application.getAllMethodPayment();
    return {
      status: 201,
      message: `Get all method_payments`,
      data: method_payments,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid method_payment code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: MethodPaymentResponse,
  })
  @HttpCode(201)
  @Get('/one/:code')
  async getOneMethodPayment(
    @Param() request: GetMethodPaymentRequestDto,
  ): Promise<MethodPaymentResponse> {
    Log.info(`(Get) Get method_payment code: ${request.code}`);

    const method_payment = await this.application.getOneMethodPayment(
      request.code,
    );
    return {
      status: 201,
      message: `MethodPayment ${request.code} OK`,
      data: method_payment,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid method_payment code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: MethodPaymentResponse,
  })
  @HttpCode(201)
  @Post()
  async createMethodPayment(
    @Body() request: CreateMethodPaymentRequestDto,
  ): Promise<MethodPaymentResponse> {
    Log.info(`(POST) Create method_payment`);

    const method_payment = await this.application.createMethodPayment(request);
    return {
      status: 201,
      message: `MethodPayment ${request.name} created OK`,
      data: method_payment,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid method_payment code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: MethodPaymentResponse,
  })
  @HttpCode(200)
  @Put('/update/:code')
  async updateMethodPayment(
    @Param() params: GetMethodPaymentRequestDto,
    @Body() request: CreateMethodPaymentRequestDto,
  ): Promise<MethodPaymentResponse> {
    Log.info(`(PUT) Put method_payment`);

    const method_payment = await this.application.updateMethodPayment(
      params.code,
      request,
    );
    return {
      status: 200,
      message: `MethodPayment updated.`,
      data: method_payment,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid method_payment code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: MethodPaymentResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:code')
  async deleteMethodPayment(
    @Param() params: GetMethodPaymentRequestDto,
  ): Promise<MethodPaymentResponse> {
    Log.info(`(Delete) Delete method_payment ${params.code}`);

    const method_payment = await this.application.deleteMethodPayment(
      params.code,
    );
    return {
      status: 200,
      message: `MethodPayment ${params.code} deleted.`,
      data: method_payment,
    };
  }
}
