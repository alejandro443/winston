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
import { TYPE_WORKER_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetTypeWorkerRequestDto } from '../request_dto/TypeWorkerDto/get.type_worker_dto';
import { CreateTypeWorkerRequestDto } from '../request_dto/TypeWorkerDto/create.type_worker_dto';
import { TypeWorkerApplication } from 'src/core/application/TypeWorker/TypeWorkerApplication';
import { TypeWorkerResponse } from '../responses/type_worker.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('TypeWorker')
@Controller('/type_worker')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class TypeWorkerController {
  constructor(
    @Inject(TYPE_WORKER_APPLICATION)
    private application: TypeWorkerApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid type_worker id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: TypeWorkerResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllTypeWorker(): Promise<TypeWorkerResponse> {
    Log.info(`(Get) Get all type_workers`);

    const type_workers = await this.application.getAllTypeWorker();
    return {
      status: 201,
      message: `Get all type_workers`,
      data: type_workers,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid type_worker id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: TypeWorkerResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneTypeWorker(
    @Param('id', ParseIntPipe) id: GetTypeWorkerRequestDto,
  ): Promise<TypeWorkerResponse> {
    Log.info(`(Get) Get type_worker id: ${id}`);

    const type_worker = await this.application.getOneTypeWorker(id);
    return {
      status: 201,
      message: `TypeWorker ${id} OK`,
      data: type_worker,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid type_worker id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: TypeWorkerResponse,
  })
  @HttpCode(201)
  @Post()
  async createTypeWorker(
    @Body() request: CreateTypeWorkerRequestDto,
  ): Promise<TypeWorkerResponse> {
    Log.info(`(POST) Create type_worker`);

    const type_worker = await this.application.createTypeWorker(request);
    return {
      status: 201,
      message: `TypeWorker ${request.name} created OK`,
      data: type_worker,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid type_worker id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: TypeWorkerResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateTypeWorker(
    @Param('id', ParseIntPipe) id: GetTypeWorkerRequestDto,
    @Body() request: CreateTypeWorkerRequestDto,
  ): Promise<TypeWorkerResponse> {
    Log.info(`(PUT) Put type_worker`);

    const type_worker = await this.application.updateTypeWorker(
      id,
      request,
    );
    return {
      status: 200,
      message: `TypeWorker updated.`,
      data: type_worker,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid type_worker id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: TypeWorkerResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteTypeWorker(
    @Param('id', ParseIntPipe) id: GetTypeWorkerRequestDto,
  ): Promise<TypeWorkerResponse> {
    Log.info(`(Delete) Delete type_worker ${id}`);

    const type_worker = await this.application.deleteTypeWorker(id);
    return {
      status: 200,
      message: `TypeWorker ${id} deleted.`,
      data: type_worker,
    };
  }
}
