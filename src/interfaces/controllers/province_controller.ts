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
import { PROVINCE_APPLICATION } from 'src/core/shared/constants/application.constants';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import {
  ProvinceResponse,
  ProvincesResponse,
} from '../responses/province.response';
import { ProvinceApplication } from 'src/core/application/Province/ProvinceApplication';
import { GetProvinceRequestDto } from '../request_dto/ProvinceDto/get.province_dto';
import { CreateProvinceRequestDto } from '../request_dto/ProvinceDto/create.province_dto';
import { UpdateProvinceRequestDto } from '../request_dto/ProvinceDto/update.province_dto';

@ApiTags('Province')
@Controller('/province')
@UseFilters(ApplicationCreatorFilter)
export class ProvinceController {
  constructor(
    @Inject(PROVINCE_APPLICATION)
    private application: ProvinceApplication,
  ) {}

  @ApiOkResponse({
    description: 'The records has been successfully obtain.',
    type: ProvincesResponse,
  })
  @ApiNoContentResponse({ description: 'Records not found.' })
  @ApiBadRequestResponse({ description: 'Invalid province id' })
  @HttpCode(200)
  @Get('/all')
  async getAllProvince(): Promise<ProvincesResponse> {
    Log.info('(GET) Get all provinces');
    const provinces = await this.application.getAllProvince();
    if (provinces.length > 0) {
      return {
        status: 200,
        message: 'All records found.',
        data: provinces,
      };
    } else {
      return {
        status: 204,
        message: 'Records not found.',
        data: provinces,
      };
    }
  }

  @ApiOkResponse({
    description: 'The record has been successfully obtain.',
    type: ProvinceResponse,
  })
  @ApiNoContentResponse({ description: 'The record not found.' })
  @ApiBadRequestResponse({ description: 'Invalid province id.' })
  @HttpCode(200)
  @Get('/one/:id')
  async getOneProvince(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProvinceResponse> {
    Log.info(`(GET) Get province id: ${id}`);
    const province = await this.application.getOneProvince(id);
    if (province.id != null) {
      return {
        status: 200,
        message: `Province ${id} find.`,
        data: province,
      };
    } else {
      return {
        status: 204,
        message: `The record not found.`,
        data: province,
      };
    }
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ProvinceResponse,
  })
  @ApiBadRequestResponse({ description: 'Invalid province id' })
  @HttpCode(201)
  @Post()
  async createProvince(
    @Body() request: CreateProvinceRequestDto,
  ): Promise<ProvinceResponse> {
    Log.info(`(POST) Create province`);
    const province = await this.application.createProvince(request);
    return {
      status: 201,
      message: `Province ${request.name} created OK`,
      data: province,
    };
  }

  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: ProvinceResponse,
  })
  @ApiBadRequestResponse({ description: 'Invalid province id' })
  @HttpCode(200)
  @Put('/update/:id')
  async updateProvince(
    @Param('id', ParseIntPipe) id: number,
    @Body() request: UpdateProvinceRequestDto,
  ): Promise<ProvinceResponse> {
    Log.info(`(PUT) Put province`);
    const province = await this.application.updateProvince(id, request);
    return {
      status: 200,
      message: `Province updated.`,
      data: province,
    };
  }

  @ApiOkResponse({
    description: 'The record has been successfully deleted.',
    type: ProvinceResponse,
  })
  @ApiBadRequestResponse({ description: 'Invalid province id' })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteProvince(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProvinceResponse> {
    Log.info(`(DELETE) Delete province ${id}`);
    const province = await this.application.deleteProvince(id);
    return {
      status: 200,
      message: `Province ${id} deleted.`,
      data: province,
    };
  }
}
