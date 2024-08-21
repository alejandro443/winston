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
import { TYPE_CHANNEL_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetTypeChannelRequestDto } from '../request_dto/TypeChannelDto/get.type_channel_dto';
import { CreateTypeChannelRequestDto } from '../request_dto/TypeChannelDto/create.type_channel_dto';
import { TypeChannelApplication } from 'src/core/application/TypeChannel/TypeChannelApplication';
import { TypeChannelResponse } from '../responses/type_channel.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('TypeChannel')
@Controller('/type_channel')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class TypeChannelController {
  constructor(
    @Inject(TYPE_CHANNEL_APPLICATION)
    private application: TypeChannelApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid type_channel code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: TypeChannelResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllTypeChannel(): Promise<TypeChannelResponse> {
    Log.info(`(Get) Get all type_channels`);

    const type_channels = await this.application.getAllTypeChannel();
    return {
      status: 201,
      message: `Get all type_channels`,
      data: type_channels,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid type_channel code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: TypeChannelResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneTypeChannel(
    @Param() request: GetTypeChannelRequestDto,
  ): Promise<TypeChannelResponse> {
    Log.info(`(Get) Get type_channel id: ${request.id}`);

    const type_channel = await this.application.getOneTypeChannel(request.id);
    return {
      status: 201,
      message: `TypeChannel ${request.id} OK`,
      data: type_channel,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid type_channel code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: TypeChannelResponse,
  })
  @HttpCode(201)
  @Post()
  async createTypeChannel(
    @Body() request: CreateTypeChannelRequestDto,
  ): Promise<TypeChannelResponse> {
    Log.info(`(POST) Create type_channel`);

    const type_channel = await this.application.createTypeChannel(request);
    return {
      status: 201,
      message: `TypeChannel ${request.name} created OK`,
      data: type_channel,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid type_channel code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: TypeChannelResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateTypeChannel(
    @Param() params: GetTypeChannelRequestDto,
    @Body() request: CreateTypeChannelRequestDto,
  ): Promise<TypeChannelResponse> {
    Log.info(`(PUT) Put type_channel`);

    const type_channel = await this.application.updateTypeChannel(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `TypeChannel updated.`,
      data: type_channel,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid type_channel id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: TypeChannelResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteTypeChannel(
    @Param() params: GetTypeChannelRequestDto,
  ): Promise<TypeChannelResponse> {
    Log.info(`(Delete) Delete type_channel ${params.id}`);

    const type_channel = await this.application.deleteTypeChannel(params.id);
    return {
      status: 200,
      message: `TypeChannel ${params.id} deleted.`,
      data: type_channel,
    };
  }
}
