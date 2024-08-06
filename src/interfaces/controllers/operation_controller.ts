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
import { OPERATION_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetOperationRequestDto } from '../request_dto/OperationDto/get.operation_dto';
import { CreateOperationRequestDto } from '../request_dto/OperationDto/create.operation_dto';
import { OperationApplication } from 'src/core/application/Operation/OperationApplication';
import { OperationResponse } from '../responses/operation.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('Operation')
@Controller('/operation')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class OperationController {
  constructor(
    @Inject(OPERATION_APPLICATION)
    private application: OperationApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid operation id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: OperationResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllOperation(): Promise<OperationResponse> {
    Log.info(`(Get) Get all operations`);

    const operations = await this.application.getAllOperation();
    return {
      status: 201,
      message: `Get all operations`,
      data: operations,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid operation id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: OperationResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneOperation(
    @Param() request: GetOperationRequestDto,
  ): Promise<OperationResponse> {
    Log.info(`(Get) Get operation id: ${request.id}`);

    const operation = await this.application.getOneOperation(request.id);
    return {
      status: 201,
      message: `Operation ${request.id} OK`,
      data: operation,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid operation id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: OperationResponse,
  })
  @HttpCode(201)
  @Post()
  async createOperation(
    @Body() request: CreateOperationRequestDto,
  ): Promise<OperationResponse> {
    Log.info(`(POST) Create operation`);

    const operation = await this.application.createOperation(request);
    return {
      status: 201,
      message: `Operation ${request.name} created OK`,
      data: operation,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid operation id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: OperationResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateOperation(
    @Param() params: GetOperationRequestDto,
    @Body() request: CreateOperationRequestDto,
  ): Promise<OperationResponse> {
    Log.info(`(PUT) Put operation`);

    const operation = await this.application.updateOperation(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `Operation updated.`,
      data: operation,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid operation id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: OperationResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteOperation(
    @Param() params: GetOperationRequestDto,
  ): Promise<OperationResponse> {
    Log.info(`(Delete) Delete operation ${params.id}`);

    const operation = await this.application.deleteOperation(params.id);
    return {
      status: 200,
      message: `Operation ${params.id} deleted.`,
      data: operation,
    };
  }
}
