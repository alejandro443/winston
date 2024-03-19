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
import { TYPE_CLIENT_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetTypeClientRequestDto } from '../request_dto/TypeClientDto/get.type_client_dto';
import { CreateTypeClientRequestDto } from '../request_dto/TypeClientDto/create.type_client_dto';
import { TypeClientApplication } from 'src/core/application/TypeClient/TypeClientApplication';
import { TypeClientResponse } from '../responses/type_client.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';

@ApiTags('TypeClient')
@Controller('/type_client')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
export class TypeClientController {
  constructor(
    @Inject(TYPE_CLIENT_APPLICATION)
    private application: TypeClientApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid type_client code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: TypeClientResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllTypeClient(): Promise<TypeClientResponse> {
    Log.info(`(Get) Get all type_clients`);

    const type_clients = await this.application.getAllTypeClient();
    return {
      status: 201,
      message: `Get all type_clients`,
      data: type_clients,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid type_client code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: TypeClientResponse,
  })
  @HttpCode(201)
  @Get('/one/:code')
  async getOneTypeClient(
    @Param() request: GetTypeClientRequestDto,
  ): Promise<TypeClientResponse> {
    Log.info(`(Get) Get type_client code: ${request.code}`);

    const type_client = await this.application.getOneTypeClient(request.code);
    return {
      status: 201,
      message: `TypeClient ${request.code} OK`,
      data: type_client,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid type_client code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: TypeClientResponse,
  })
  @HttpCode(201)
  @Post()
  async createTypeClient(
    @Body() request: CreateTypeClientRequestDto,
  ): Promise<TypeClientResponse> {
    Log.info(`(POST) Create type_client`);

    const type_client = await this.application.createTypeClient(request);
    return {
      status: 201,
      message: `TypeClient ${request.name} created OK`,
      data: type_client,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid type_client code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: TypeClientResponse,
  })
  @HttpCode(200)
  @Put('/update/:code')
  async updateTypeClient(
    @Param() params: GetTypeClientRequestDto,
    @Body() request: CreateTypeClientRequestDto,
  ): Promise<TypeClientResponse> {
    Log.info(`(PUT) Put type_client`);

    const type_client = await this.application.updateTypeClient(
      params.code,
      request,
    );
    return {
      status: 200,
      message: `TypeClient updated.`,
      data: type_client,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid type_client code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: TypeClientResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:code')
  async deleteTypeClient(
    @Param() params: GetTypeClientRequestDto,
  ): Promise<TypeClientResponse> {
    Log.info(`(Delete) Delete type_client ${params.code}`);

    const type_client = await this.application.deleteTypeClient(params.code);
    return {
      status: 200,
      message: `TypeClient ${params.code} deleted.`,
      data: type_client,
    };
  }
}
