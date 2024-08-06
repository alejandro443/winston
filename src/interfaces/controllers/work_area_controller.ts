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
import { WORK_AREA_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetWorkAreaRequestDto } from '../request_dto/WorkAreaDto/get.work_area_dto';
import { CreateWorkAreaRequestDto } from '../request_dto/WorkAreaDto/create.work_area_dto';
import { WorkAreaApplication } from 'src/core/application/WorkArea/WorkAreaApplication';
import { WorkAreaResponse } from '../responses/work_area.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('WorkArea')
@Controller('/work_area')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class WorkAreaController {
  constructor(
    @Inject(WORK_AREA_APPLICATION)
    private application: WorkAreaApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid work_area id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: WorkAreaResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllWorkArea(): Promise<WorkAreaResponse> {
    Log.info(`(Get) Get all work_areas`);

    const work_areas = await this.application.getAllWorkArea();
    return {
      status: 201,
      message: `Get all work_areas`,
      data: work_areas,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid work_area id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: WorkAreaResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneWorkArea(
    @Param() request: GetWorkAreaRequestDto,
  ): Promise<WorkAreaResponse> {
    Log.info(`(Get) Get work_area id: ${request.id}`);

    const work_area = await this.application.getOneWorkArea(request.id);
    return {
      status: 201,
      message: `WorkArea ${request.id} OK`,
      data: work_area,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid work_area id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: WorkAreaResponse,
  })
  @HttpCode(201)
  @Post()
  async createWorkArea(
    @Body() request: CreateWorkAreaRequestDto,
  ): Promise<WorkAreaResponse> {
    Log.info(`(POST) Create work_area`);

    const work_area = await this.application.createWorkArea(request);
    return {
      status: 201,
      message: `WorkArea ${request.name} created OK`,
      data: work_area,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid work_area id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: WorkAreaResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateWorkArea(
    @Param() params: GetWorkAreaRequestDto,
    @Body() request: CreateWorkAreaRequestDto,
  ): Promise<WorkAreaResponse> {
    Log.info(`(PUT) Put work_area`);

    const work_area = await this.application.updateWorkArea(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `WorkArea updated.`,
      data: work_area,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid work_area id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: WorkAreaResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteWorkArea(
    @Param() params: GetWorkAreaRequestDto,
  ): Promise<WorkAreaResponse> {
    Log.info(`(Delete) Delete work_area ${params.id}`);

    const work_area = await this.application.deleteWorkArea(params.id);
    return {
      status: 200,
      message: `WorkArea ${params.id} deleted.`,
      data: work_area,
    };
  }
}
