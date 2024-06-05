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
import { COMPANY_POSITION_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetCompanyPositionRequestDto } from '../request_dto/CompanyPositionDto/get.company_position_dto';
import { CreateCompanyPositionRequestDto } from '../request_dto/CompanyPositionDto/create.company_position_dto';
import { CompanyPositionApplication } from 'src/core/application/CompanyPosition/CompanyPositionApplication';
import { CompanyPositionResponse } from '../responses/company_position.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('CompanyPosition')
@Controller('/company_position')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class CompanyPositionController {
  constructor(
    @Inject(COMPANY_POSITION_APPLICATION)
    private application: CompanyPositionApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid company_position code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: CompanyPositionResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllCompanyPosition(): Promise<CompanyPositionResponse> {
    Log.info(`(Get) Get all company_positions`);

    const company_positions = await this.application.getAllCompanyPosition();
    return {
      status: 201,
      message: `Get all company_positions`,
      data: company_positions,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid company_position code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: CompanyPositionResponse,
  })
  @HttpCode(201)
  @Get('/one/:code')
  async getOneCompanyPosition(
    @Param() request: GetCompanyPositionRequestDto,
  ): Promise<CompanyPositionResponse> {
    Log.info(`(Get) Get company_position code: ${request.code}`);

    const company_position = await this.application.getOneCompanyPosition(request.code);
    return {
      status: 201,
      message: `CompanyPosition ${request.code} OK`,
      data: company_position,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid company_position code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CompanyPositionResponse,
  })
  @HttpCode(201)
  @Post()
  async createCompanyPosition(
    @Body() request: CreateCompanyPositionRequestDto,
  ): Promise<CompanyPositionResponse> {
    Log.info(`(POST) Create company_position`);

    const company_position = await this.application.createCompanyPosition(request);
    return {
      status: 201,
      message: `CompanyPosition ${request.name} created OK`,
      data: company_position,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid company_position code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: CompanyPositionResponse,
  })
  @HttpCode(200)
  @Put('/update/:code')
  async updateCompanyPosition(
    @Param() params: GetCompanyPositionRequestDto,
    @Body() request: CreateCompanyPositionRequestDto,
  ): Promise<CompanyPositionResponse> {
    Log.info(`(PUT) Put company_position`);

    const company_position = await this.application.updateCompanyPosition(
      params.code,
      request,
    );
    return {
      status: 200,
      message: `CompanyPosition updated.`,
      data: company_position,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid company_position code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: CompanyPositionResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:code')
  async deleteCompanyPosition(
    @Param() params: GetCompanyPositionRequestDto,
  ): Promise<CompanyPositionResponse> {
    Log.info(`(Delete) Delete company_position ${params.code}`);

    const company_position = await this.application.deleteCompanyPosition(params.code);
    return {
      status: 200,
      message: `CompanyPosition ${params.code} deleted.`,
      data: company_position,
    };
  }
}
