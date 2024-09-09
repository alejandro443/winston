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
import { SUPPLY_TYPE_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetSupplyTypeRequestDto } from '../request_dto/SupplyTypeDto/get.supply_type_dto';
import { CreateSupplyTypeRequestDto } from '../request_dto/SupplyTypeDto/create.supply_type_dto';
import { SupplyTypeApplication } from 'src/core/application/SupplyType/SupplyTypeApplication';
import { SupplyTypeResponse } from '../responses/supply_type.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('SupplyType')
@Controller('/supply_type')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class SupplyTypeController {
  constructor(
    @Inject(SUPPLY_TYPE_APPLICATION)
    private application: SupplyTypeApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid supply_type id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: SupplyTypeResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllSupplyType(): Promise<SupplyTypeResponse> {
    Log.info(`(Get) Get all supply_types`);

    const supply_types = await this.application.getAllSupplyType();
    return {
      status: 201,
      message: `Get all supply_types`,
      data: supply_types,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid supply_type id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: SupplyTypeResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneSupplyType(
    @Param() request: GetSupplyTypeRequestDto,
  ): Promise<SupplyTypeResponse> {
    Log.info(`(Get) Get supply_type id: ${request.id}`);

    const supply_type = await this.application.getOneSupplyType(request.id);
    return {
      status: 201,
      message: `SupplyType ${request.id} OK`,
      data: supply_type,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid supply_type id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: SupplyTypeResponse,
  })
  @HttpCode(201)
  @Post()
  async createSupplyType(
    @Body() request: CreateSupplyTypeRequestDto,
  ): Promise<SupplyTypeResponse> {
    Log.info(`(POST) Create supply_type`);

    const supply_type = await this.application.createSupplyType(request);
    return {
      status: 201,
      message: `SupplyType ${request.name} created OK`,
      data: supply_type,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid supply_type id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: SupplyTypeResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateSupplyType(
    @Param() params: GetSupplyTypeRequestDto,
    @Body() request: CreateSupplyTypeRequestDto,
  ): Promise<SupplyTypeResponse> {
    Log.info(`(PUT) Put supply_type`);

    const supply_type = await this.application.updateSupplyType(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `SupplyType updated.`,
      data: supply_type,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid supply_type id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: SupplyTypeResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteSupplyType(
    @Param() params: GetSupplyTypeRequestDto,
  ): Promise<SupplyTypeResponse> {
    Log.info(`(Delete) Delete supply_type ${params.id}`);

    const supply_type = await this.application.deleteSupplyType(params.id);
    return {
      status: 200,
      message: `SupplyType ${params.id} deleted.`,
      data: supply_type,
    };
  }
}
