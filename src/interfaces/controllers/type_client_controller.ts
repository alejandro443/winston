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
import { TYPE_CLIENT_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetTypeClientRequestDto } from '../request_dto/TypeClientDto/get.type_client_dto';
import { CreateTypeClientRequestDto } from '../request_dto/TypeClientDto/create.type_client_dto';
import { TypeClientApplication } from 'src/core/application/TypeClient/TypeClientApplication';
import { TypeClientResponse } from '../responses/type_client.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('TypeClient')
@Controller('/type_client')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class TypeClientController {
  constructor(
    @Inject(TYPE_CLIENT_APPLICATION)
    private application: TypeClientApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid type_client id' })
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

  @ApiBadRequestResponse({ description: 'Invalid type_client id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: TypeClientResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneTypeClient(
    @Param('id', ParseIntPipe) request: GetTypeClientRequestDto,
  ): Promise<TypeClientResponse> {
    Log.info(`(Get) Get type_client id: ${request.id}`);

    const type_client = await this.application.getOneTypeClient(request.id);
    return {
      status: 201,
      message: `TypeClient ${request.id} OK`,
      data: type_client,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid type_client id' })
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

  @ApiBadRequestResponse({ description: 'Invalid type_client id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: TypeClientResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateTypeClient(
    @Param('id', ParseIntPipe) params: GetTypeClientRequestDto,
    @Body() request: CreateTypeClientRequestDto,
  ): Promise<TypeClientResponse> {
    Log.info(`(PUT) Put type_client`);

    const type_client = await this.application.updateTypeClient(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `TypeClient updated.`,
      data: type_client,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid type_client id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: TypeClientResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteTypeClient(
    @Param('id', ParseIntPipe) params: GetTypeClientRequestDto,
  ): Promise<TypeClientResponse> {
    Log.info(`(Delete) Delete type_client ${params.id}`);

    const type_client = await this.application.deleteTypeClient(params.id);
    return {
      status: 200,
      message: `TypeClient ${params.id} deleted.`,
      data: type_client,
    };
  }
}
