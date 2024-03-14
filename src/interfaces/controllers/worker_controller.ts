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
import { AppResponse } from '../../infraestructure/responses/app.response';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetWorkerRequestDto } from '../request_dto/WorkerDto/get.worker_dto';
import { CreateWorkerRequestDto } from '../request_dto/WorkerDto/create.worker_dto';
import { WorkerApplication } from 'src/core/application/Worker/WorkerApplication';
import { WorkerCreatorFilter } from '../exception_filters/worker.exception_filter';

@ApiTags('Worker')
@Controller('/worker')
@UseFilters(WorkerCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
export class WorkerController {
  constructor(
    @Inject(CLIENT_APPLICATION)
    private application: WorkerApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid worker code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: AppResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllWorker(): Promise<AppResponse> {
    Log.info(`(Get) Get all classifications`);

    const classifications = await this.application.getAllWorker();
    return {
      status: 201,
      message: `Get all classifications`,
      data: classifications,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid worker code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: AppResponse,
  })
  @HttpCode(201)
  @Get('/one/:code')
  async getOneWorker(
    @Param() request: GetWorkerRequestDto,
  ): Promise<AppResponse> {
    Log.info(`(Get) Get worker code: ${request.code}`);

    const worker = await this.application.getOneWorker(request.code);
    return {
      status: 201,
      message: `Worker ${request.code} OK`,
      data: worker,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid worker code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: AppResponse,
  })
  @HttpCode(201)
  @Post()
  async createWorker(
    @Body() request: CreateWorkerRequestDto,
  ): Promise<AppResponse> {
    Log.info(`(POST) Create worker`);

    const worker = await this.application.createWorker(request);
    return {
      status: 201,
      message: `Worker ${request.code} created OK`,
      data: worker,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid worker code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: AppResponse,
  })
  @HttpCode(200)
  @Put('/update/:code')
  async updateWorker(
    @Param() params: GetWorkerRequestDto,
    @Body() request: CreateWorkerRequestDto,
  ): Promise<AppResponse> {
    Log.info(`(PUT) Put worker`);

    const worker = await this.application.updateWorker(params.code, request);
    return {
      status: 200,
      message: `Worker updated.`,
      data: worker,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid worker code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: AppResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:code')
  async deleteWorker(
    @Param() params: GetWorkerRequestDto,
  ): Promise<AppResponse> {
    Log.info(`(Delete) Delete worker ${params.code}`);

    const worker = await this.application.deleteWorker(params.code);
    return {
      status: 200,
      message: `Worker ${params.code} deleted.`,
      data: worker,
    };
  }
}
