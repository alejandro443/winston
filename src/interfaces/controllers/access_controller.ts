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
import { ACCESS_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetAccessRequestDto } from '../request_dto/AccessDto/get.access_dto';
import { CreateAccessRequestDto } from '../request_dto/AccessDto/create.access_dto';
import { AccessApplication } from 'src/core/application/Access/AccessApplication';
import { AccessResponse, AccessesResponse } from '../responses/access.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('Access')
@Controller('/access')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class AccessController {
  constructor(
    @Inject(ACCESS_APPLICATION)
    private application: AccessApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid access id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: AccessResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllAccess(): Promise<AccessesResponse> {
    Log.info(`(Get) Get all accesss`);

    const accesss = await this.application.getAllAccess();
    return {
      status: 201,
      message: `Get all accesss`,
      data: accesss,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid access id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: AccessResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneAccess(
    @Param('id', ParseIntPipe) id: GetAccessRequestDto,
  ): Promise<AccessResponse> {
    Log.info(`(Get) Get access id: ${id}`);

    const access = await this.application.getOneAccess(id);
    return {
      status: 201,
      message: `Access ${id} OK`,
      data: access,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid access id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: AccessResponse,
  })
  @HttpCode(201)
  @Post()
  async createAccess(
    @Body() request: CreateAccessRequestDto,
  ): Promise<AccessResponse> {
    Log.info(`(POST) Create access`);

    const access = await this.application.createAccess(request);
    return {
      status: 201,
      message: `Access ${request.name} created OK`,
      data: access,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid access id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: AccessResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateAccess(
    @Param('id', ParseIntPipe) id: GetAccessRequestDto,
    @Body() request: CreateAccessRequestDto,
  ): Promise<AccessResponse> {
    Log.info(`(PUT) Put access`);

    const access = await this.application.updateAccess(id, request);
    return {
      status: 200,
      message: `Access updated.`,
      data: access,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid access id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: AccessResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteAccess(
    @Param('id', ParseIntPipe) id: GetAccessRequestDto,
  ): Promise<AccessResponse> {
    Log.info(`(Delete) Delete access ${id}`);

    const access = await this.application.deleteAccess(id);
    return {
      status: 200,
      message: `Access ${id} deleted.`,
      data: access,
    };
  }
}
