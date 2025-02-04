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
import { Log } from '../../infraestructure/shared/log/Log';
import { CreateRolRequestDto } from '../request_dto/RolDto/create.rol_dto';
import { ROL_APPLICATION } from '../../core/shared/constants/application.constants';
import { RolApplication } from '../../core/application/Rol/RolApplication';
import { RolResponse, RolesResponse } from '../responses/rol.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { GetRolRequestDto } from '../request_dto/RolDto/get.rol_dto';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('Roles')
@Controller('/rol')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
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
    @Param('id', ParseIntPipe) id: GetRolRequestDto
  ): Promise<RolResponse> {
    Log.info(`(Get) Get access id: ${id}`);

    const access = await this.application.getOneRol(id);
    return {
      status: 201,
      message: `Rol ${id} OK`,
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
  async createRol(@Body() request: CreateRolRequestDto): Promise<RolResponse> {
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
    @Param('id', ParseIntPipe) id: GetRolRequestDto,
    @Body() request: CreateRolRequestDto,
  ): Promise<RolResponse> {
    Log.info(`(PUT) Put access`);

    const access = await this.application.updateRol(id, request);
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
    @Param('id', ParseIntPipe) id: GetRolRequestDto
  ): Promise<RolResponse> {
    Log.info(`(Delete) Delete access ${id}`);

    const access = await this.application.deleteRol(id);
    return {
      status: 200,
      message: `Rol ${id} deleted.`,
      data: access,
    };
  }
}
