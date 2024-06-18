import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  Param,
  ParseIntPipe,
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
import { SUPPLY_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetSupplyRequestDto } from '../request_dto/SupplyDto/get.supply_dto';
import { CreateSupplyRequestDto } from '../request_dto/SupplyDto/create.supply_dto';
import { SupplyApplication } from 'src/core/application/Supply/SupplyApplication';
import { SupplyResponse } from '../responses/supply.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('Supply')
@Controller('/supply')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class SupplyController {
  constructor(
    @Inject(SUPPLY_APPLICATION)
    private application: SupplyApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid supply code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: SupplyResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllSupply(): Promise<SupplyResponse> {
    Log.info(`(Get) Get all supplys`);

    const supplys = await this.application.getAllSupply();
    return {
      status: 201,
      message: `Get all supplys`,
      data: supplys,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid supply code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: SupplyResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneSupply(
    @Param('id', ParseIntPipe) request: GetSupplyRequestDto,
  ): Promise<SupplyResponse> {
    Log.info(`(Get) Get supply code: ${request.id}`);

    const supply = await this.application.getOneSupply(request.id);
    return {
      status: 201,
      message: `Supply ${request.id} OK`,
      data: supply,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid supply code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: SupplyResponse,
  })
  @HttpCode(201)
  @Post()
  async createSupply(
    @Body() request: CreateSupplyRequestDto,
  ): Promise<SupplyResponse> {
    Log.info(`(POST) Create supply`);

    const supply = await this.application.createSupply(request);
    return {
      status: 201,
      message: `Supply ${request.name} created OK`,
      data: supply,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid supply code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: SupplyResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateSupply(
    @Param('id', ParseIntPipe) params: GetSupplyRequestDto,
    @Body() request: CreateSupplyRequestDto,
  ): Promise<SupplyResponse> {
    Log.info(`(PUT) Put supply`);

    const supply = await this.application.updateSupply(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `Supply updated.`,
      data: supply,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid supply code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: SupplyResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteSupply(
    @Param('id', ParseIntPipe) params: GetSupplyRequestDto,
  ): Promise<SupplyResponse> {
    Log.info(`(Delete) Delete supply ${params.id}`);

    const supply = await this.application.deleteSupply(params.id);
    return {
      status: 200,
      message: `Supply ${params.id} deleted.`,
      data: supply,
    };
  }
}
