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
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SALE_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { CreateSaleRequestDto } from '../request_dto/SaleDto/create.sale_dto';
import { SaleApplication } from 'src/core/application/Sale/SaleApplication';
import {
  SalesResponse,
  SaleResponse,
  SalesReceivableResponse,
  SaleDetailsResponse,
  ElectronicReceiptsResponse,
} from '../responses/sale.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';
import { FiltersSalesRequestDto } from '../request_dto/SaleDto/get.sale_dto';

@ApiTags('Sale')
@Controller('/sale')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class SaleController {
  constructor(
    @Inject(SALE_APPLICATION)
    private application: SaleApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid sale id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: SaleResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllSale(): Promise<SalesResponse> {
    Log.info(`(Get) Get all sale`);

    const sale = await this.application.getAllSale();
    return {
      status: 201,
      message: `Ok`,
      data: sale,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid sale id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: SaleResponse,
  })
  @HttpCode(201)
  @Post()
  async createSale(
    @Body() request: CreateSaleRequestDto,
  ): Promise<SaleResponse> {
    Log.info(`(POST) Create sale`);

    const sale = await this.application.createSale(request);
    return {
      status: 201,
      message: `Ok`,
      data: sale,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid sale id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: SalesReceivableResponse,
  })
  @HttpCode(201)
  @Post('/sales_receivable')
  async getAllReceivable(
    @Body() request: FiltersSalesRequestDto,
  ): Promise<SalesReceivableResponse> {
    Log.info(`(Post) getAllReceivable`);

    const sale = await this.application.getAllReceivable(request);
    return {
      status: 201,
      message: `Ok`,
      data: sale,
    };
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: SaleDetailsResponse,
  })
  @HttpCode(200)
  @Get('/details/:sale_id')
  async getSaleDetail(
    @Param() params: any,
  ): Promise<SaleDetailsResponse> {
    Log.info(`(Get) Get all sale details.`);

    const sale = await this.application.getOneDetails(params.sale_id);
    return {
      status: 200,
      message: `Ok`,
      data: sale,
    };
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ElectronicReceiptsResponse,
  })
  @HttpCode(200)
  @Get('/electronic_receipts')
  async getElectronicReceipts(): Promise<ElectronicReceiptsResponse> {
    Log.info(`(Get) Get all electronic receipts.`);

    const sale = await this.application.getElectronicReceipts();
    return {
      status: 200,
      message: `Ok`,
      data: sale,
    };
  }

}
