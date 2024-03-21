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
import { ApiBadRequestResponse, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { Log } from '../../infraestructure/shared/log/Log';
import { CreateRolRequestDto } from '../request_dto/RolDto/create.rol_dto';
import { ROL_APPLICATION } from '../../core/shared/constants/application.constants';
import { RolApplication } from '../../core/application/Rol/RolApplication';
import { RolResponse, RolesResponse } from '../responses/rol.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { GetRolRequestDto } from '../request_dto/RolDto/get.rol_dto';

@ApiTags('Roles')
@Controller('/rol')
@UseFilters(ApplicationCreatorFilter)
export class RolController {
  constructor(@Inject(ROL_APPLICATION) private application: RolApplication) {}

  @ApiBadRequestResponse({ description: 'Invalid access id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: RolResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllRol(): Promise<RolesResponse> {
    Log.info(`(Get) Get all accesss`);

    const accesss = await this.application.getAllRol();
    return {
      status: 201,
      message: `Get all accesss`,
      data: accesss,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid access id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: RolResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneRol(
    @Param() request: GetRolRequestDto,
  ): Promise<RolResponse> {
    Log.info(`(Get) Get access id: ${request.id}`);

    const access = await this.application.getOneRol(
      request.id,
    );
    return {
      status: 201,
      message: `Rol ${request.id} OK`,
      data: access,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid access id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: RolResponse,
  })
  @HttpCode(201)
  @Post()
  async createRol(
    @Body() request: CreateRolRequestDto,
  ): Promise<RolResponse> {
    Log.info(`(POST) Create access`);

    const access = await this.application.createRol(request);
    return {
      status: 201,
      message: `Rol ${request.name} created OK`,
      data: access,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid access id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: RolResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateRol(
    @Param() params: GetRolRequestDto,
    @Body() request: CreateRolRequestDto,
  ): Promise<RolResponse> {
    Log.info(`(PUT) Put access`);

    const access = await this.application.updateRol(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `Rol updated.`,
      data: access,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid access id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: RolResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteRol(
    @Param() params: GetRolRequestDto,
  ): Promise<RolResponse> {
    Log.info(`(Delete) Delete access ${params.id}`);

    const access = await this.application.deleteRol(
      params.id,
    );
    return {
      status: 200,
      message: `Rol ${params.id} deleted.`,
      data: access,
    };
  }
}
