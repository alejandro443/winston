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
import { CLASSIFICATION_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetClassificationRequestDto } from '../request_dto/ClassificationDto/get.classification_dto';
import { CreateClassificationRequestDto } from '../request_dto/ClassificationDto/create.classification_dto';
import { ClassificationApplication } from 'src/core/application/Classification/ClassificationApplication';
import { ClassificationResponse } from '../responses/classification.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';

@ApiTags('Classification')
@Controller('/classification')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
export class ClassificationController {
  constructor(
    @Inject(CLASSIFICATION_APPLICATION)
    private application: ClassificationApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid classification code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ClassificationResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllClassification(): Promise<ClassificationResponse> {
    Log.info(`(Get) Get all classifications`);

    const classifications = await this.application.getAllClassification();
    return {
      status: 201,
      message: `Get all classifications`,
      data: classifications,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid classification code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ClassificationResponse,
  })
  @HttpCode(201)
  @Get('/one/:code')
  async getOneClassification(
    @Param() request: GetClassificationRequestDto,
  ): Promise<ClassificationResponse> {
    Log.info(`(Get) Get classification code: ${request.code}`);

    const classification = await this.application.getOneClassification(
      request.code,
    );
    return {
      status: 201,
      message: `Classification ${request.code} OK`,
      data: classification,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid classification code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ClassificationResponse,
  })
  @HttpCode(201)
  @Post()
  async createClassification(
    @Body() request: CreateClassificationRequestDto,
  ): Promise<ClassificationResponse> {
    Log.info(`(POST) Create classification`);

    const classification = await this.application.createClassification(request);
    return {
      status: 201,
      message: `Classification ${request.name} created OK`,
      data: classification,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid classification code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: ClassificationResponse,
  })
  @HttpCode(200)
  @Put('/update/:code')
  async updateClassification(
    @Param() params: GetClassificationRequestDto,
    @Body() request: CreateClassificationRequestDto,
  ): Promise<ClassificationResponse> {
    Log.info(`(PUT) Put classification`);

    const classification = await this.application.updateClassification(
      params.code,
      request,
    );
    return {
      status: 200,
      message: `Classification updated.`,
      data: classification,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid classification code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: ClassificationResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:code')
  async deleteClassification(
    @Param() params: GetClassificationRequestDto,
  ): Promise<ClassificationResponse> {
    Log.info(`(Delete) Delete classification ${params.code}`);

    const classification = await this.application.deleteClassification(
      params.code,
    );
    return {
      status: 200,
      message: `Classification ${params.code} deleted.`,
      data: classification,
    };
  }
}
