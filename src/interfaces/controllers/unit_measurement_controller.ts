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
import { TYPE_DOCUMENT_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetUnitMeasurementRequestDto } from '../request_dto/UnitMeasurementDto/get.unit_measurement_dto';
import { CreateUnitMeasurementRequestDto } from '../request_dto/UnitMeasurementDto/create.unit_measurement_dto';
import { UnitMeasurementApplication } from 'src/core/application/UnitMeasurement/UnitMeasurementApplication';
import { UnitMeasurementResponse } from '../responses/unit_measurement.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('UnitMeasurement')
@Controller('/unit_measurement')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class UnitMeasurementController {
  constructor(
    @Inject(TYPE_DOCUMENT_APPLICATION)
    private application: UnitMeasurementApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid unit_measurement code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: UnitMeasurementResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllUnitMeasurement(): Promise<UnitMeasurementResponse> {
    Log.info(`(Get) Get all unit_measurements`);

    const unit_measurements = await this.application.getAllUnitMeasurement();
    return {
      status: 201,
      message: `Get all unit_measurements`,
      data: unit_measurements,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid unit_measurement code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: UnitMeasurementResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneUnitMeasurement(
    @Param() request: GetUnitMeasurementRequestDto,
  ): Promise<UnitMeasurementResponse> {
    Log.info(`(Get) Get unit_measurement code: ${request.id}`);

    const unit_measurement = await this.application.getOneUnitMeasurement(
      request.id,
    );
    return {
      status: 201,
      message: `UnitMeasurement ${request.id} OK`,
      data: unit_measurement,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid unit_measurement code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: UnitMeasurementResponse,
  })
  @HttpCode(201)
  @Post()
  async createUnitMeasurement(
    @Body() request: CreateUnitMeasurementRequestDto,
  ): Promise<UnitMeasurementResponse> {
    Log.info(`(POST) Create unit_measurement`);

    const unit_measurement = await this.application.createUnitMeasurement(request);
    return {
      status: 201,
      message: `UnitMeasurement ${request.name} created OK`,
      data: unit_measurement,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid unit_measurement code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: UnitMeasurementResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateUnitMeasurement(
    @Param() params: GetUnitMeasurementRequestDto,
    @Body() request: CreateUnitMeasurementRequestDto,
  ): Promise<UnitMeasurementResponse> {
    Log.info(`(PUT) Put unit_measurement`);

    const unit_measurement = await this.application.updateUnitMeasurement(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `UnitMeasurement updated.`,
      data: unit_measurement,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid unit_measurement code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: UnitMeasurementResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteUnitMeasurement(
    @Param() params: GetUnitMeasurementRequestDto,
  ): Promise<UnitMeasurementResponse> {
    Log.info(`(Delete) Delete unit_measurement ${params.id}`);

    const unit_measurement = await this.application.deleteUnitMeasurement(
      params.id,
    );
    return {
      status: 200,
      message: `UnitMeasurement ${params.id} deleted.`,
      data: unit_measurement,
    };
  }
}
