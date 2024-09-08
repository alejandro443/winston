import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  Param,
  ParseIntPipe,
  Patch,
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
import { SALE_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetSaleRequestDto } from '../request_dto/SaleDto/get.sale_dto';
import { CreateSaleRequestDto } from '../request_dto/SaleDto/create.sale_dto';
import { SaleApplication } from 'src/core/application/Sale/SaleApplication';
import {
  SalesResponse,
  SaleResponse,
} from '../responses/sale.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';
import { UpdateSaleRequestDto } from '../request_dto/SaleDto/update.sale_dto';

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
      message: `Get all sale`,
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
      message: `Sale ${sale.id} created OK`,
      data: sale,
    };
  }
}
