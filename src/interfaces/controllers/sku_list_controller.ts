import {
  Body,
  Controller,
  HttpCode,
  Inject,
  Post,
  UseFilters,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SKU_LIST_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { CreateSkuListRequestDto } from '../request_dto/SkuListDto/create.sku_list_dto';
import { SkuListApplication } from 'src/core/application/SkuList/SkuListApplication';
import { SkuListResponse } from '../responses/sku_list.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('SkuList')
@Controller('/sku_list')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class SkuListController {
  constructor(
    @Inject(SKU_LIST_APPLICATION)
    private application: SkuListApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid sku_list code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: SkuListResponse,
  })
  @HttpCode(201)
  @Post()
  async createSkuList(
    @Body() request: CreateSkuListRequestDto,
  ): Promise<SkuListResponse> {
    Log.info(`(POST) Create sku_list`);

    const sku_list = await this.application.createSkuList(request);
    return {
      status: 201,
      message: `SkuList ${request.code} created OK`,
      data: sku_list,
    };
  }
}
