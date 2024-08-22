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
import { BUSINESS_TURN_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetBusinessTurnRequestDto } from '../request_dto/BusinessTurnDto/get.business_turn_dto';
import { CreateBusinessTurnRequestDto } from '../request_dto/BusinessTurnDto/create.business_turn_dto';
import { BusinessTurnApplication } from 'src/core/application/BusinessTurn/BusinessTurnApplication';
import { BusinessTurnResponse } from '../responses/business_turn.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('BusinessTurn')
@Controller('/business_turn')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class BusinessTurnController {
  constructor(
    @Inject(BUSINESS_TURN_APPLICATION)
    private application: BusinessTurnApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid business_turn id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: BusinessTurnResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllBusinessTurn(): Promise<BusinessTurnResponse> {
    Log.info(`(Get) Get all business_turns`);

    const business_turns = await this.application.getAllBusinessTurn();
    return {
      status: 201,
      message: `Get all business_turns`,
      data: business_turns,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid business_turn id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: BusinessTurnResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneBusinessTurn(
    @Param() request: GetBusinessTurnRequestDto,
  ): Promise<BusinessTurnResponse> {
    Log.info(`(Get) Get business_turn id: ${request.id}`);

    const business_turn = await this.application.getOneBusinessTurn(
      request.id,
    );
    return {
      status: 201,
      message: `BusinessTurn ${request.id} OK`,
      data: business_turn,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid business_turn id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: BusinessTurnResponse,
  })
  @HttpCode(201)
  @Post()
  async createBusinessTurn(
    @Body() request: CreateBusinessTurnRequestDto,
  ): Promise<BusinessTurnResponse> {
    Log.info(`(POST) Create business_turn`);

    const business_turn = await this.application.createBusinessTurn(request);
    return {
      status: 201,
      message: `BusinessTurn ${request.name} created OK`,
      data: business_turn,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid business_turn id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: BusinessTurnResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateBusinessTurn(
    @Param() params: GetBusinessTurnRequestDto,
    @Body() request: CreateBusinessTurnRequestDto,
  ): Promise<BusinessTurnResponse> {
    Log.info(`(PUT) Put business_turn`);

    const business_turn = await this.application.updateBusinessTurn(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `BusinessTurn updated.`,
      data: business_turn,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid business_turn id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: BusinessTurnResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteBusinessTurn(
    @Param() params: GetBusinessTurnRequestDto,
  ): Promise<BusinessTurnResponse> {
    Log.info(`(Delete) Delete business_turn ${params.id}`);

    const business_turn = await this.application.deleteBusinessTurn(
      params.id,
    );
    return {
      status: 200,
      message: `BusinessTurn ${params.id} deleted.`,
      data: business_turn,
    };
  }
}
