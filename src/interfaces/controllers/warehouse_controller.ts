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
import { WAREHOUSE_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetWarehouseRequestDto } from '../request_dto/WarehouseDto/get.warehouse_dto';
import { CreateWarehouseRequestDto } from '../request_dto/WarehouseDto/create.warehouse_dto';
import { WarehouseApplication } from 'src/core/application/Warehouse/WarehouseApplication';
import { WarehouseResponse } from '../responses/warehouse.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('Warehouse')
@Controller('/warehouse')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class WarehouseController {
  constructor(
    @Inject(WAREHOUSE_APPLICATION)
    private application: WarehouseApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid warehouse id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: WarehouseResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllWarehouse(): Promise<WarehouseResponse> {
    Log.info(`(Get) Get all warehouses`);

    const warehouses = await this.application.getAllWarehouse();
    return {
      status: 201,
      message: `Get all warehouses`,
      data: warehouses,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid warehouse id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: WarehouseResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneWarehouse(
    @Param() request: GetWarehouseRequestDto,
  ): Promise<WarehouseResponse> {
    Log.info(`(Get) Get warehouse id: ${request.id}`);

    const warehouse = await this.application.getOneWarehouse(
      request.id,
    );
    return {
      status: 201,
      message: `Warehouse ${request.id} OK`,
      data: warehouse,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid warehouse id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: WarehouseResponse,
  })
  @HttpCode(201)
  @Post()
  async createWarehouse(
    @Body() request: CreateWarehouseRequestDto,
  ): Promise<WarehouseResponse> {
    Log.info(`(POST) Create warehouse`);

    const warehouse = await this.application.createWarehouse(request);
    return {
      status: 201,
      message: `Warehouse ${request.name} created OK`,
      data: warehouse,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid warehouse id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: WarehouseResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateWarehouse(
    @Param() params: GetWarehouseRequestDto,
    @Body() request: CreateWarehouseRequestDto,
  ): Promise<WarehouseResponse> {
    Log.info(`(PUT) Put warehouse`);

    const warehouse = await this.application.updateWarehouse(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `Warehouse updated.`,
      data: warehouse,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid warehouse id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: WarehouseResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteWarehouse(
    @Param() params: GetWarehouseRequestDto,
  ): Promise<WarehouseResponse> {
    Log.info(`(Delete) Delete warehouse ${params.id}`);

    const warehouse = await this.application.deleteWarehouse(
      params.id,
    );
    return {
      status: 200,
      message: `Warehouse ${params.id} deleted.`,
      data: warehouse,
    };
  }
}
