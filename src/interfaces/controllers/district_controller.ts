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
import { DISTRICT_APPLICATION } from 'src/core/shared/constants/application.constants';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import {
  DistrictResponse,
  DistrictsResponse,
} from '../responses/district.response';
import { DistrictApplication } from 'src/core/application/District/DistrictApplication';
import { GetDistrictRequestDto } from '../request_dto/DistrictDto/get.district_dto';
import { CreateDistrictRequestDto } from '../request_dto/DistrictDto/create.district_dto';
import { UpdateDistrictRequestDto } from '../request_dto/DistrictDto/update.district_dto';

@ApiTags('District')
@Controller('/district')
@UseFilters(ApplicationCreatorFilter)
export class DistrictController {
  constructor(
    @Inject(DISTRICT_APPLICATION)
    private application: DistrictApplication,
  ) {}

  @ApiOkResponse({
    description: 'The records has been successfully obtain.',
    type: DistrictsResponse,
  })
  @ApiNoContentResponse({ description: 'Records not found.' })
  @ApiBadRequestResponse({ description: 'Invalid district id' })
  @HttpCode(200)
  @Get('/all')
  async getAllDistrict(): Promise<DistrictsResponse> {
    Log.info('(GET) Get all districts');
    const districts = await this.application.getAllDistrict();
    if (districts.length > 0) {
      return {
        status: 200,
        message: 'All records found.',
        data: districts,
      };
    } else {
      return {
        status: 204,
        message: 'Records not found.',
        data: districts,
      };
    }
  }

  @ApiOkResponse({
    description: 'The record has been successfully obtain.',
    type: DistrictResponse,
  })
  @ApiNoContentResponse({ description: 'The record not found.' })
  @ApiBadRequestResponse({ description: 'Invalid district id.' })
  @HttpCode(200)
  @Get('/one/:id')
  async getOneDistrict(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DistrictResponse> {
    Log.info(`(GET) Get district id: ${id}`);
    const district = await this.application.getOneDistrict(id);
    if (district.id != null) {
      return {
        status: 200,
        message: `District ${id} find.`,
        data: district,
      };
    } else {
      return {
        status: 204,
        message: `The record not found.`,
        data: district,
      };
    }
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: DistrictResponse,
  })
  @ApiBadRequestResponse({ description: 'Invalid district id' })
  @HttpCode(201)
  @Post()
  async createDistrict(
    @Body() request: CreateDistrictRequestDto,
  ): Promise<DistrictResponse> {
    Log.info(`(POST) Create district`);
    const district = await this.application.createDistrict(request);
    return {
      status: 201,
      message: `District ${request.name} created OK`,
      data: district,
    };
  }

  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: DistrictResponse,
  })
  @ApiBadRequestResponse({ description: 'Invalid district id' })
  @HttpCode(200)
  @Put('/update/:id')
  async updateDistrict(
    @Param('id', ParseIntPipe) id: number,
    @Body() request: UpdateDistrictRequestDto,
  ): Promise<DistrictResponse> {
    Log.info(`(PUT) Put district`);
    const district = await this.application.updateDistrict(id, request);
    return {
      status: 200,
      message: `District updated.`,
      data: district,
    };
  }

  @ApiOkResponse({
    description: 'The record has been successfully deleted.',
    type: DistrictResponse,
  })
  @ApiBadRequestResponse({ description: 'Invalid district id' })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteDistrict(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<DistrictResponse> {
    Log.info(`(DELETE) Delete district ${id}`);
    const district = await this.application.deleteDistrict(id);
    return {
      status: 200,
      message: `District ${id} deleted.`,
      data: district,
    };
  }
}
