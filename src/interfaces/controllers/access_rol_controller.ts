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
import { ACCESS_ROL_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetAccessRolRequestDto } from '../request_dto/AccessRolDto/get.access_rol_dto';
import { CreateAccessRolRequestDto } from '../request_dto/AccessRolDto/create.access_rol_dto';
import { AccessRolApplication } from 'src/core/application/AccessRol/AccessRolApplication';
import { AccessRolResponse } from '../responses/access_rol.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('AccessRol')
@Controller('/access_rol')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class AccessRolController {
  constructor(
    @Inject(ACCESS_ROL_APPLICATION)
    private application: AccessRolApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid access_rol id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: AccessRolResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllAccessRol(): Promise<AccessRolResponse> {
    Log.info(`(Get) Get all access_rols`);

    const access_rols = await this.application.getAllAccessRol();
    return {
      status: 201,
      message: `Get all access_rols`,
      data: access_rols,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid access_rol id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: AccessRolResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneAccessRol(
    @Param('id', ParseIntPipe) request: GetAccessRolRequestDto,
  ): Promise<AccessRolResponse> {
    Log.info(`(Get) Get access_rol id: ${request.id}`);

    const access_rol = await this.application.getOneAccessRol(request.id);
    return {
      status: 201,
      message: `AccessRol ${request.id} OK`,
      data: access_rol,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid access_rol id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: AccessRolResponse,
  })
  @HttpCode(201)
  @Post()
  async createAccessRol(
    @Body() request: CreateAccessRolRequestDto,
  ): Promise<AccessRolResponse> {
    Log.info(`(POST) Create access_rol`);

    const access_rol = await this.application.createAccessRol(request);
    return {
      status: 201,
      message: `AccessRol ${request.id} created OK`,
      data: access_rol,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid access_rol id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: AccessRolResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateAccessRol(
    @Param('id', ParseIntPipe) params: GetAccessRolRequestDto,
    @Body() request: CreateAccessRolRequestDto,
  ): Promise<AccessRolResponse> {
    Log.info(`(PUT) Put access_rol`);

    const access_rol = await this.application.updateAccessRol(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `AccessRol updated.`,
      data: access_rol,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid access_rol id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: AccessRolResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteAccessRol(
    @Param('id', ParseIntPipe) params: GetAccessRolRequestDto,
  ): Promise<AccessRolResponse> {
    Log.info(`(Delete) Delete access_rol ${params.id}`);

    const access_rol = await this.application.deleteAccessRol(params.id);
    return {
      status: 200,
      message: `AccessRol ${params.id} deleted.`,
      data: access_rol,
    };
  }
}
