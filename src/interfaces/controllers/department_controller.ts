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
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Log } from '../../infraestructure/shared/log/Log';
import { DEPARTMENT_APPLICATION } from 'src/core/shared/constants/application.constants';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import {
  DepartmentResponse,
  DepartmentsResponse,
} from '../responses/department.response';
import { DepartmentApplication } from 'src/core/application/Department/DepartmentApplication';
import { GetDepartmentRequestDto } from '../request_dto/DepartmentDto/get.department_dto';
import { CreateDepartmentRequestDto } from '../request_dto/DepartmentDto/create.department_dto';
import { UpdateDepartmentRequestDto } from '../request_dto/DepartmentDto/update.department_dto';

@ApiTags('Department')
@Controller('/department')
@UseFilters(ApplicationCreatorFilter)
export class DepartmentController {
  constructor(
    @Inject(DEPARTMENT_APPLICATION)
    private application: DepartmentApplication,
  ) {}

  @ApiOkResponse({
    description: 'The records has been successfully obtain.',
    type: DepartmentsResponse,
  })
  @ApiNoContentResponse({ description: 'Records not found.' })
  @ApiBadRequestResponse({ description: 'Invalid department id' })
  @HttpCode(200)
  @Get('/all')
  async getAllDepartment(): Promise<DepartmentsResponse> {
    Log.info('(GET) Get all departments');
    const departments = await this.application.getAllDepartment();
    if (departments.length > 0) {
      return {
        status: 200,
        message: 'All records found.',
        data: departments,
      };
    } else {
      return {
        status: 204,
        message: 'Records not found.',
        data: departments,
      };
    }
  }

  @ApiOkResponse({
    description: 'The record has been successfully obtain.',
    type: DepartmentResponse,
  })
  @ApiNoContentResponse({ description: 'The record not found.' })
  @ApiBadRequestResponse({ description: 'Invalid department id.' })
  @HttpCode(200)
  @Get('/one/:id')
  async getOneDepartment(
    @Param('id', ParseIntPipe) request: GetDepartmentRequestDto,
  ): Promise<DepartmentResponse> {
    Log.info(`(GET) Get department id: ${request.id}`);
    const department = await this.application.getOneDepartment(request.id);
    if (department.id != null) {
      return {
        status: 200,
        message: `Department ${request.id} find.`,
        data: department,
      };
    } else {
      return {
        status: 204,
        message: `The record not found.`,
        data: department,
      };
    }
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: DepartmentResponse,
  })
  @ApiBadRequestResponse({ description: 'Invalid department id' })
  @HttpCode(201)
  @Post()
  async createDepartment(
    @Body() request: CreateDepartmentRequestDto,
  ): Promise<DepartmentResponse> {
    Log.info(`(POST) Create department`);
    const department = await this.application.createDepartment(request);
    return {
      status: 201,
      message: `Department ${request.name} created OK`,
      data: department,
    };
  }

  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: DepartmentResponse,
  })
  @ApiBadRequestResponse({ description: 'Invalid department id' })
  @HttpCode(200)
  @Put('/update/:id')
  async updateDepartment(
    @Param('id', ParseIntPipe) params: GetDepartmentRequestDto,
    @Body() request: UpdateDepartmentRequestDto,
  ): Promise<DepartmentResponse> {
    Log.info(`(PUT) Put department`);
    const department = await this.application.updateDepartment(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `Department updated.`,
      data: department,
    };
  }

  @ApiOkResponse({
    description: 'The record has been successfully deleted.',
    type: DepartmentResponse,
  })
  @ApiBadRequestResponse({ description: 'Invalid department id' })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteDepartment(
    @Param('id', ParseIntPipe) params: GetDepartmentRequestDto,
  ): Promise<DepartmentResponse> {
    Log.info(`(DELETE) Delete department ${params.id}`);
    const department = await this.application.deleteDepartment(params.id);
    return {
      status: 200,
      message: `Department ${params.id} deleted.`,
      data: department,
    };
  }
}
