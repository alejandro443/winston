import {
  BadRequestException,
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
import { ClientResponse, ClientsResponse, SearchByDocumentResponse } from '../responses/client.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { PortfolioResponse } from '../responses/client.response';
import { Auth } from '@src/core/decorators/auth.decorator';
import { UpdateClientRequestDto } from '../request_dto/ClientDto/update.client_dto';
import { GetPersonRequestDto } from '../request_dto/PersonDto/get.person_dto';
import { ClientApplicationError } from '@src/core/shared/error/ClientApplicationError';

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
    @Param('id', ParseIntPipe) param: number,
  ): Promise<ClientResponse> {
    Log.info(`(Get) Get client id: ${param}`);

    const client = await this.application.getOneClient(param);
    return {
      status: 201,
      message: `Client ${param} OK`,
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

  @ApiBadRequestResponse({ description: 'Invalid or bad request data.' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: ClientResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateClient(
    @Param('id', ParseIntPipe) clientId: number,
    @Body() request: CreateClientRequestDto,
  ): Promise<ClientResponse> {
    Log.info(`(PUT) Update Client`);

    try {
      const updatedClient = await this.application.updateClient(clientId, request);
  
      return {
        status: 200,
        message: 'Client updated successfully.',
        data: updatedClient,
      };
    } catch (error) {
      throw new ClientApplicationError(error, 'INTERNAL_SERVER_ERROR');
    }
  }

  @ApiBadRequestResponse({ description: 'Invalid client id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: ClientResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteClient(
    @Param('id', ParseIntPipe) param: GetClientRequestDto,
  ): Promise<ClientResponse> {
    Log.info(`(Delete) Delete client ${param.id}`);

    const client = await this.application.deleteClient(param.id);
    return {
      status: 200,
      message: `Client ${param.id} deleted.`,
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

  @ApiBadRequestResponse({ description: 'Invalid person main_identification' })
  @ApiCreatedResponse({
    description: 'Client successfully obtained.',
    type: SearchByDocumentResponse,
  })
  @HttpCode(200)
  @Get('/search_document/:main_identification')
  async SearchByDocument(
    @Param() params: GetPersonRequestDto,
  ): Promise<SearchByDocumentResponse> {
    Log.info(`(SearchByDocument) Search ${params.main_identification}`);

    const client = await this.application.SearchByDocument(
      params.main_identification,
    );
    return {
      status: 200,
      message: `Ok`,
      data: client,
    };
  }
}
