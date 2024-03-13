import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Post, Put, UseFilters } from "@nestjs/common";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiTags } from "@nestjs/swagger";
import { TYPE_WORKER_APPLICATION } from "src/core/shared/constants/application.constants";
import { AppResponse } from "../../infraestructure/responses/app.response";
import { Log } from "../../infraestructure/shared/log/Log";
import { GetTypeWorkerRequestDto } from "../request_dto/TypeWorkerDto/get.type_worker_dto";
import { CreateTypeWorkerRequestDto } from "../request_dto/TypeWorkerDto/create.type_worker_dto";
import { TypeWorkerApplication } from "src/core/application/TypeWorker/TypeWorkerApplication";
import { TypeWorkerCreatorFilter } from "../exception_filters/type_worker.exception_filter";

@ApiTags('TypeWorker')
@Controller('/type_worker')
@UseFilters(TypeWorkerCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
export class TypeWorkerController {

  constructor(
    @Inject(TYPE_WORKER_APPLICATION) 
    private application: TypeWorkerApplication
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid type_worker code' })
  @ApiCreatedResponse({ description: 'The record has been successfully obtain.', type: AppResponse })
  @HttpCode(201)
  @Get('/all')
  async getAllTypeWorker(): Promise<AppResponse> {
    Log.info(`(Get) Get all type_workers`)

    const type_workers = await this.application.getAllTypeWorker()
    return {
      status: 201,
      message: `Get all type_workers`,
      data: type_workers
    }
  }
  
  @ApiBadRequestResponse({ description: 'Invalid type_worker code' })
  @ApiCreatedResponse({ description: 'The record has been successfully obtain.', type: AppResponse })
  @HttpCode(201)
  @Get('/one/:code')
  async getOneTypeWorker(@Param() request: GetTypeWorkerRequestDto): Promise<AppResponse> {
    Log.info(`(Get) Get type_worker code: ${request.code}`)

    const type_worker = await this.application.getOneTypeWorker(request.code)
    return {
      status: 201,
      message: `TypeWorker ${request.code} OK`,
      data: type_worker
    }
  }

  @ApiBadRequestResponse({ description: 'Invalid type_worker code' })
  @ApiCreatedResponse({ description: 'The record has been successfully created.', type: AppResponse })
  @HttpCode(201)
  @Post()
  async createTypeWorker(@Body() request: CreateTypeWorkerRequestDto): Promise<AppResponse> {
    Log.info(`(POST) Create type_worker`)

    const type_worker = await this.application.createTypeWorker(request)
    return {
      status: 201,
      message: `TypeWorker ${request.name} created OK`,
      data: type_worker
    }
  }

  @ApiBadRequestResponse({ description: 'Invalid type_worker code' })
  @ApiCreatedResponse({ description: 'The record has been successfully updated.', type: AppResponse })
  @HttpCode(200)
  @Put('/update/:code')
  async updateTypeWorker(@Param() params: GetTypeWorkerRequestDto, @Body() request: CreateTypeWorkerRequestDto): Promise<AppResponse> {
    Log.info(`(PUT) Put type_worker`)

    const type_worker = await this.application.updateTypeWorker(params.code, request)
    return {
      status: 200,
      message: `TypeWorker updated.`,
      data: type_worker
    }
  }
  
  @ApiBadRequestResponse({ description: 'Invalid type_worker code' })
  @ApiCreatedResponse({ description: 'The record has been successfully deleted.', type: AppResponse })
  @HttpCode(200)
  @Delete('/delete/:code')
  async deleteTypeWorker(@Param() params: GetTypeWorkerRequestDto): Promise<AppResponse> {
    Log.info(`(Delete) Delete type_worker ${params.code}`)

    const type_worker = await this.application.deleteTypeWorker(params.code)
    return {
      status: 200,
      message: `TypeWorker ${params.code} deleted.`,
      data: type_worker
    }
  }
}