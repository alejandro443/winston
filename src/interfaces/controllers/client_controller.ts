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
import { CLIENT_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetClientRequestDto } from '../request_dto/ClientDto/get.client_dto';
import { CreateClientRequestDto } from '../request_dto/ClientDto/create.client_dto';
import { ClientApplication } from 'src/core/application/Client/ClientApplication';
import { ClientResponse, ClientsResponse } from '../responses/client.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';

@ApiTags('Client')
@Controller('/client')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
export class ClientController {
  constructor(
    @Inject(CLIENT_APPLICATION)
    private application: ClientApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid client code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ClientResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllClient(): Promise<ClientsResponse> {
    Log.info(`(Get) Get all clients`);

    const clients = await this.application.getAllClient();
    return {
      status: 201,
      message: `Get all clients`,
      data: clients,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid client code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ClientResponse,
  })
  @HttpCode(201)
  @Get('/one/:code')
  async getOneClient(
    @Param() request: GetClientRequestDto,
  ): Promise<ClientResponse> {
    Log.info(`(Get) Get client code: ${request.code}`);

    const client = await this.application.getOneClient(request.code);
    return {
      status: 201,
      message: `Client ${request.code} OK`,
      data: client,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid client code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ClientResponse,
  })
  @HttpCode(201)
  @Post()
  async createClient(
    @Body() request: CreateClientRequestDto,
  ): Promise<ClientResponse> {
    Log.info(`(POST) Create client`);

    const client = await this.application.createClient(request);
    return {
      status: 201,
      message: `Client ${request.code} created OK`,
      data: client,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid client code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: ClientResponse,
  })
  @HttpCode(200)
  @Put('/update/:code')
  async updateClient(
    @Param() params: GetClientRequestDto,
    @Body() request: CreateClientRequestDto,
  ): Promise<ClientResponse> {
    Log.info(`(PUT) Put client`);

    const client = await this.application.updateClient(params.code, request);
    return {
      status: 200,
      message: `Client updated.`,
      data: client,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid client code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: ClientResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:code')
  async deleteClient(
    @Param() params: GetClientRequestDto,
  ): Promise<ClientResponse> {
    Log.info(`(Delete) Delete client ${params.code}`);

    const client = await this.application.deleteClient(params.code);
    return {
      status: 200,
      message: `Client ${params.code} deleted.`,
      data: client,
    };
  }
}
