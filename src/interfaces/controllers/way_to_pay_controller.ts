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
import { WAY_TO_PAY_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetWayToPayRequestDto } from '../request_dto/WayToPayDto/get.way_to_pay_dto';
import { CreateWayToPayRequestDto } from '../request_dto/WayToPayDto/create.way_to_pay_dto';
import { WayToPayApplication } from 'src/core/application/WayToPay/WayToPayApplication';
import { WayToPayResponse } from '../responses/way_to_pay.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('WayToPay')
@Controller('/way_to_pay')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class WayToPayController {
  constructor(
    @Inject(WAY_TO_PAY_APPLICATION)
    private application: WayToPayApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid way_to_pay id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: WayToPayResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllWayToPay(): Promise<WayToPayResponse> {
    Log.info(`(Get) Get all way_to_pays`);

    const way_to_pays = await this.application.getAllWayToPay();
    return {
      status: 201,
      message: `Get all way_to_pays`,
      data: way_to_pays,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid way_to_pay id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: WayToPayResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneWayToPay(
    @Param() request: GetWayToPayRequestDto,
  ): Promise<WayToPayResponse> {
    Log.info(`(Get) Get way_to_pay id: ${request.id}`);

    const way_to_pay = await this.application.getOneWayToPay(
      request.id,
    );
    return {
      status: 201,
      message: `WayToPay ${request.id} OK`,
      data: way_to_pay,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid way_to_pay id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: WayToPayResponse,
  })
  @HttpCode(201)
  @Post()
  async createWayToPay(
    @Body() request: CreateWayToPayRequestDto,
  ): Promise<WayToPayResponse> {
    Log.info(`(POST) Create way_to_pay`);

    const way_to_pay = await this.application.createWayToPay(request);
    return {
      status: 201,
      message: `WayToPay ${request.name} created OK`,
      data: way_to_pay,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid way_to_pay id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: WayToPayResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateWayToPay(
    @Param() params: GetWayToPayRequestDto,
    @Body() request: CreateWayToPayRequestDto,
  ): Promise<WayToPayResponse> {
    Log.info(`(PUT) Put way_to_pay`);

    const way_to_pay = await this.application.updateWayToPay(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `WayToPay updated.`,
      data: way_to_pay,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid way_to_pay id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: WayToPayResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteWayToPay(
    @Param() params: GetWayToPayRequestDto,
  ): Promise<WayToPayResponse> {
    Log.info(`(Delete) Delete way_to_pay ${params.id}`);

    const way_to_pay = await this.application.deleteWayToPay(
      params.id,
    );
    return {
      status: 200,
      message: `WayToPay ${params.id} deleted.`,
      data: way_to_pay,
    };
  }
}
