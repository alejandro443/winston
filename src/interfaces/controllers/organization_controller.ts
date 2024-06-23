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
import { ORGANIZATION_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetOrganizationRequestDto } from '../request_dto/OrganizationDto/get.organization_dto';
import { CreateOrganizationRequestDto } from '../request_dto/OrganizationDto/create.organization_dto';
import { UpdateOrganizationRequestDto } from '../request_dto/OrganizationDto/update.organization_dto';
import { OrganizationApplication } from 'src/core/application/Organization/OrganizationApplication';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { OrganizationResponse } from '../responses/organization.response';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('Organization')
@Controller('/organization')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class OrganizationController {
  constructor(
    @Inject(ORGANIZATION_APPLICATION)
    private application: OrganizationApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid organization id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: OrganizationResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllOrganization(): Promise<OrganizationResponse> {
    Log.info(`(Get) Get all organizations`);

    const organizations = await this.application.getAllOrganization();
    return {
      status: 201,
      message: `Get all organizations`,
      data: organizations,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid organization id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: OrganizationResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneOrganization(
    @Param('id', ParseIntPipe) id: GetOrganizationRequestDto,
  ): Promise<OrganizationResponse> {
    Log.info(`(Get) Get organization id: ${id}`);

    const organization = await this.application.getOneOrganization(id);
    return {
      status: 201,
      message: `Organization ${id} OK`,
      data: organization,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid organization id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: OrganizationResponse,
  })
  @HttpCode(201)
  @Post()
  async createOrganization(
    @Body() request: CreateOrganizationRequestDto,
  ): Promise<OrganizationResponse> {
    Log.info(`(POST) Create organization`);

    const organization = await this.application.createOrganization(request);
    return {
      status: 201,
      message: `Organization ${request.name} created OK`,
      data: organization,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid organization id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: OrganizationResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateOrganization(
    @Param('id', ParseIntPipe) id: GetOrganizationRequestDto,
    @Body() request: UpdateOrganizationRequestDto,
  ): Promise<OrganizationResponse> {
    Log.info(`(PUT) Put organization`);

    const organization = await this.application.updateOrganization(
      id,
      request,
    );
    return {
      status: 200,
      message: `Organization updated.`,
      data: organization,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid organization id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: OrganizationResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteOrganization(
    @Param('id', ParseIntPipe) id: GetOrganizationRequestDto,
  ): Promise<OrganizationResponse> {
    Log.info(`(Delete) Delete organization ${id}`);

    const organization = await this.application.deleteOrganization(id);
    return {
      status: 200,
      message: `Organization ${id} deleted.`,
      data: organization,
    };
  }
}
