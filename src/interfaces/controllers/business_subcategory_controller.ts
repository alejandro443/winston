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
import { BUSINESS_SUBCATEGORY_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetBusinessSubcategoryRequestDto } from '../request_dto/BusinessSubcategoryDto/get.business_subcategory_dto';
import { CreateBusinessSubcategoryRequestDto } from '../request_dto/BusinessSubcategoryDto/create.business_subcategory_dto';
import { BusinessSubcategoryApplication } from 'src/core/application/BusinessSubcategory/BusinessSubcategoryApplication';
import { BusinessSubcategoryResponse } from '../responses/business_subcategory.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('BusinessSubcategory')
@Controller('/business_subcategory')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class BusinessSubcategoryController {
  constructor(
    @Inject(BUSINESS_SUBCATEGORY_APPLICATION)
    private application: BusinessSubcategoryApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid business_subcategory id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: BusinessSubcategoryResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllBusinessSubcategory(): Promise<BusinessSubcategoryResponse> {
    Log.info(`(Get) Get all data`);

    const business_subcategorys = await this.application.getAllBusinessSubcategory();
    return {
      status: 201,
      message: `Get all data`,
      data: business_subcategorys,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid business_subcategory id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: BusinessSubcategoryResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneBusinessSubcategory(
    @Param() request: GetBusinessSubcategoryRequestDto,
  ): Promise<BusinessSubcategoryResponse> {
    Log.info(`(Get) Get business_subcategory id: ${request.id}`);

    const business_subcategory = await this.application.getOneBusinessSubcategory(
      request.id,
    );
    return {
      status: 201,
      message: `BusinessSubcategory ${request.id} OK`,
      data: business_subcategory,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid business_subcategory id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: BusinessSubcategoryResponse,
  })
  @HttpCode(201)
  @Post()
  async createBusinessSubcategory(
    @Body() request: CreateBusinessSubcategoryRequestDto,
  ): Promise<BusinessSubcategoryResponse> {
    Log.info(`(POST) Create business_subcategory`);

    const business_subcategory = await this.application.createBusinessSubcategory(request);
    return {
      status: 201,
      message: `BusinessSubcategory ${request.name} created OK`,
      data: business_subcategory,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid business_subcategory id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: BusinessSubcategoryResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateBusinessSubcategory(
    @Param() params: GetBusinessSubcategoryRequestDto,
    @Body() request: CreateBusinessSubcategoryRequestDto,
  ): Promise<BusinessSubcategoryResponse> {
    Log.info(`(PUT) Put business_subcategory`);

    const business_subcategory = await this.application.updateBusinessSubcategory(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `BusinessSubcategory updated.`,
      data: business_subcategory,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid business_subcategory id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: BusinessSubcategoryResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteBusinessSubcategory(
    @Param() params: GetBusinessSubcategoryRequestDto,
  ): Promise<BusinessSubcategoryResponse> {
    Log.info(`(Delete) Delete business_subcategory ${params.id}`);

    const business_subcategory = await this.application.deleteBusinessSubcategory(
      params.id,
    );
    return {
      status: 200,
      message: `BusinessSubcategory ${params.id} deleted.`,
      data: business_subcategory,
    };
  }
}
