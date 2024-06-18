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
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Log } from '../../infraestructure/shared/log/Log';
import { REGION_APPLICATION } from 'src/core/shared/constants/application.constants';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { RegionResponse, RegionsResponse } from '../responses/region.response';
import { RegionApplication } from 'src/core/application/Region/RegionApplication';
import { GetRegionRequestDto } from '../request_dto/RegionDto/get.region_dto';
import { CreateRegionRequestDto } from '../request_dto/RegionDto/create.region_dto';
import { UpdateRegionRequestDto } from '../request_dto/RegionDto/update.region_dto';

@ApiTags('Region')
@Controller('/region')
@UseFilters(ApplicationCreatorFilter)
export class RegionController {
  constructor(
    @Inject(REGION_APPLICATION)
    private application: RegionApplication,
  ) {}

  @ApiOkResponse({
    description: 'The records has been successfully obtain.',
    type: RegionsResponse,
  })
  @ApiNoContentResponse({ description: 'Records not found.' })
  @ApiBadRequestResponse({ description: 'Invalid region id' })
  @HttpCode(200)
  @Get('/all')
  async getAllRegion(): Promise<RegionsResponse> {
    Log.info('(GET) Get all regions');
    const regions = await this.application.getAllRegion();
    if (regions.length > 0) {
      return {
        status: 200,
        message: 'All records found.',
        data: regions,
      };
    } else {
      return {
        status: 204,
        message: 'Records not found.',
        data: regions,
      };
    }
  }

  @ApiOkResponse({
    description: 'The record has been successfully obtain.',
    type: RegionResponse,
  })
  @ApiNoContentResponse({ description: 'The record not found.' })
  @ApiBadRequestResponse({ description: 'Invalid region id.' })
  @HttpCode(200)
  @Get('/one/:id')
  async getOneRegion(
    @Param('id', ParseIntPipe) request: GetRegionRequestDto,
  ): Promise<RegionResponse> {
    Log.info(`(GET) Get region id: ${request.id}`);
    const region = await this.application.getOneRegion(request.id);
    if (region.id != null) {
      return {
        status: 200,
        message: `Region ${request.id} find.`,
        data: region,
      };
    } else {
      return {
        status: 204,
        message: `The record not found.`,
        data: region,
      };
    }
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: RegionResponse,
  })
  @ApiBadRequestResponse({ description: 'Invalid region id' })
  @HttpCode(201)
  @Post()
  async createRegion(
    @Body() request: CreateRegionRequestDto,
  ): Promise<RegionResponse> {
    Log.info(`(POST) Create region`);
    const region = await this.application.createRegion(request);
    return {
      status: 201,
      message: `Region ${request.name} created OK`,
      data: region,
    };
  }

  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: RegionResponse,
  })
  @ApiBadRequestResponse({ description: 'Invalid region id' })
  @HttpCode(200)
  @Put('/update/:id')
  async updateRegion(
    @Param('id', ParseIntPipe) params: GetRegionRequestDto,
    @Body() request: UpdateRegionRequestDto,
  ): Promise<RegionResponse> {
    Log.info(`(PUT) Put region`);
    const region = await this.application.updateRegion(params.id, request);
    return {
      status: 200,
      message: `Region updated.`,
      data: region,
    };
  }

  @ApiOkResponse({
    description: 'The record has been successfully deleted.',
    type: RegionResponse,
  })
  @ApiBadRequestResponse({ description: 'Invalid region id' })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteRegion(
    @Param('id', ParseIntPipe) params: GetRegionRequestDto,
  ): Promise<RegionResponse> {
    Log.info(`(DELETE) Delete region ${params.id}`);
    const region = await this.application.deleteRegion(params.id);
    return {
      status: 200,
      message: `Region ${params.id} deleted.`,
      data: region,
    };
  }
}
