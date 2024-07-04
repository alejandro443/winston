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
import { CLIENT_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetClientRequestDto } from '../request_dto/ClientDto/get.client_dto';
import { CreateClientRequestDto } from '../request_dto/ClientDto/create.client_dto';
import { ClientApplication } from 'src/core/application/Client/ClientApplication';
import { ClientResponse, ClientsResponse } from '../responses/client.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { PortfolioResponse } from '../responses/client.response';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('Client')
@Controller('/client')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class ClientController {
  constructor(
    @Inject(CLIENT_APPLICATION)
    private application: ClientApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid client id' })
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

  @ApiBadRequestResponse({ description: 'Invalid client id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ClientResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneClient(
    @Param('id', ParseIntPipe) id: GetClientRequestDto,
  ): Promise<ClientResponse> {
    Log.info(`(Get) Get client id: ${id}`);

    const client = await this.application.getOneClient(id);
    return {
      status: 201,
      message: `Client ${id} OK`,
      data: client,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid client id' })
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
    console.log(client)
    if(client){
      return {
        status: 201,
        message: `Client ${client.id} created OK`,
        data: client,
      };
    }
  }

  @ApiBadRequestResponse({ description: 'Invalid client id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: ClientResponse,
  })
  @HttpCode(200)
  @Put('/update/:code')
  async updateClient(
    @Param('code') code: GetClientRequestDto,
    @Body() request: CreateClientRequestDto,
  ): Promise<ClientResponse> {
    Log.info(`(PUT) Put client`);
    // console.log(code)

    const client = await this.application.updateClient(code, request);
    return {
      status: 200,
      message: `Client updated.`,
      data: client,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid client id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: ClientResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteClient(
    @Param('id', ParseIntPipe) id: GetClientRequestDto,
  ): Promise<ClientResponse> {
    Log.info(`(Delete) Delete client ${id}`);

    const client = await this.application.deleteClient(id);
    return {
      status: 200,
      message: `Client ${id} deleted.`,
      data: client,
    };
  }

  @ApiBadRequestResponse({ description: 'Client portfolio not found.' })
  @ApiCreatedResponse({
    description: 'Client portfolio successfully obtained.',
    type: PortfolioResponse,
  })
  @HttpCode(201)
  @Get('/portfolio')
  async clientPortfolio(): Promise<PortfolioResponse> {
    Log.info(`(Get) Get portfolio clients`);

    const clients = await this.application.getPortfolioClient();
    return {
      status: 201,
      message: `Get all clients`,
      data: clients,
    };
  }
}
