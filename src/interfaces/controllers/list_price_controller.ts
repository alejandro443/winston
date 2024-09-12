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
import { LIST_PRICE_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { CreateRequestDto } from '../request_dto/ListPriceDto/create_request_dto';
import { ListPriceApplication } from 'src/core/application/ListPrice/ListPriceApplication';
import { ListPriceResponse } from '../responses/list_price.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';
import { GetRequestActivesDto, GetRequestDto } from '../request_dto/ListPriceDto/get_request_dto';

@ApiTags('ListPrice')
@Controller('/list_price')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class ListPriceController {
  constructor(
    @Inject(LIST_PRICE_APPLICATION)
    private application: ListPriceApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid list_price id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ListPriceResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllListPrice(): Promise<ListPriceResponse> {
    Log.info(`(Get) Get all list_prices`);

    const list_prices = await this.application.getAllListPrice();
    return {
      status: 201,
      message: `Get all list_prices`,
      data: list_prices,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid list_price id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ListPriceResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneListPrice(
    @Param() request: GetRequestDto,
  ): Promise<ListPriceResponse> {
    Log.info(`(Get) Get list_price id: ${request.id}`);

    const list_price = await this.application.getOneListPrice(
      request.id,
    );
    return {
      status: 201,
      message: `ListPrice ${request.id} OK`,
      data: list_price,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid list_price id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ListPriceResponse,
  })
  @HttpCode(201)
  @Post()
  async createListPrice(
    @Body() request: CreateRequestDto,
  ): Promise<ListPriceResponse> {
    Log.info(`(POST) Create list_price`);

    const list_price = await this.application.createListPrice(request);
    return {
      status: 201,
      message: `ListPrice ${request.name} created OK`,
      data: list_price,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid list_price id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: ListPriceResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateListPrice(
    @Param() params: GetRequestDto,
    @Body() request: CreateRequestDto,
  ): Promise<ListPriceResponse> {
    Log.info(`(PUT) Put list_price`);

    const list_price = await this.application.updateListPrice(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `ListPrice updated.`,
      data: list_price,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid list_price id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: ListPriceResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteListPrice(
    @Param() params: GetRequestDto,
  ): Promise<ListPriceResponse> {
    Log.info(`(Delete) Delete list_price ${params.id}`);

    const list_price = await this.application.deleteListPrice(
      params.id,
    );
    return {
      status: 200,
      message: `ListPrice ${params.id} deleted.`,
      data: list_price,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid type' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ListPriceResponse,
  })
  @HttpCode(201)
  @Get('/actives/:type')
  async getListPriceActives(
    @Param() request: GetRequestActivesDto,
  ): Promise<ListPriceResponse > {
    Log.info(`(Get) Get list_price type: ${request.type}`);

    const list_price = await this.application.getListPriceActives(request.type);
    return {
      status: 201,
      message: `OK`,
      data: list_price,
    };
  }
}
