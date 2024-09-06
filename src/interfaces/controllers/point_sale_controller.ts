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
import { POINT_SALE_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetPointSaleRequestDto } from '../request_dto/PointSaleDto/get.point_sale_dto';
import { CreatePointSaleRequestDto } from '../request_dto/PointSaleDto/create.point_sale_dto';
import { PointSaleApplication } from 'src/core/application/PointSale/PointSaleApplication';
import { PointSaleResponse } from '../responses/point_sale.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('PointSale')
@Controller('/point_sale')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class PointSaleController {
  constructor(
    @Inject(POINT_SALE_APPLICATION)
    private application: PointSaleApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid point_sale id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: PointSaleResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllPointSale(): Promise<PointSaleResponse> {
    Log.info(`(Get) Get all point_sales`);

    const point_sales = await this.application.getAllPointSale();
    return {
      status: 201,
      message: `Get all point_sales`,
      data: point_sales,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid point_sale id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: PointSaleResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOnePointSale(
    @Param() request: GetPointSaleRequestDto,
  ): Promise<PointSaleResponse> {
    Log.info(`(Get) Get point_sale id: ${request.id}`);

    const point_sale = await this.application.getOnePointSale(
      request.id,
    );
    return {
      status: 201,
      message: `PointSale ${request.id} OK`,
      data: point_sale,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid point_sale id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: PointSaleResponse,
  })
  @HttpCode(201)
  @Post()
  async createPointSale(
    @Body() request: CreatePointSaleRequestDto,
  ): Promise<PointSaleResponse> {
    Log.info(`(POST) Create point_sale`);

    const point_sale = await this.application.createPointSale(request);
    return {
      status: 201,
      message: `PointSale ${request.name} created OK`,
      data: point_sale,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid point_sale id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: PointSaleResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updatePointSale(
    @Param() params: GetPointSaleRequestDto,
    @Body() request: CreatePointSaleRequestDto,
  ): Promise<PointSaleResponse> {
    Log.info(`(PUT) Put point_sale`);

    const point_sale = await this.application.updatePointSale(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `PointSale updated.`,
      data: point_sale,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid point_sale id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: PointSaleResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deletePointSale(
    @Param() params: GetPointSaleRequestDto,
  ): Promise<PointSaleResponse> {
    Log.info(`(Delete) Delete point_sale ${params.id}`);

    const point_sale = await this.application.deletePointSale(
      params.id,
    );
    return {
      status: 200,
      message: `PointSale ${params.id} deleted.`,
      data: point_sale,
    };
  }
}
