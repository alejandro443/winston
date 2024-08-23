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
import { ZONE_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetZoneRequestDto } from '../request_dto/ZoneDto/get.zone_dto';
import { CreateZoneRequestDto } from '../request_dto/ZoneDto/create.zone_dto';
import { ZoneApplication } from 'src/core/application/Zone/ZoneApplication';
import { ZoneResponse } from '../responses/zone.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('Zone')
@Controller('/zone')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class ZoneController {
  constructor(
    @Inject(ZONE_APPLICATION)
    private application: ZoneApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid zone id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ZoneResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllZone(): Promise<ZoneResponse> {
    Log.info(`(Get) Get all zones`);

    const zones = await this.application.getAllZone();
    return {
      status: 201,
      message: `Get all zones`,
      data: zones,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid zone id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ZoneResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneZone(
    @Param() request: GetZoneRequestDto,
  ): Promise<ZoneResponse> {
    Log.info(`(Get) Get zone id: ${request.id}`);

    const zone = await this.application.getOneZone(
      request.id,
    );
    return {
      status: 201,
      message: `Zone ${request.id} OK`,
      data: zone,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid zone id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ZoneResponse,
  })
  @HttpCode(201)
  @Post()
  async createZone(
    @Body() request: CreateZoneRequestDto,
  ): Promise<ZoneResponse> {
    Log.info(`(POST) Create zone`);

    const zone = await this.application.createZone(request);
    return {
      status: 201,
      message: `Zone ${request.name} created OK`,
      data: zone,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid zone id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: ZoneResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateZone(
    @Param() params: GetZoneRequestDto,
    @Body() request: CreateZoneRequestDto,
  ): Promise<ZoneResponse> {
    Log.info(`(PUT) Put zone`);

    const zone = await this.application.updateZone(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `Zone updated.`,
      data: zone,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid zone id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: ZoneResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteZone(
    @Param() params: GetZoneRequestDto,
  ): Promise<ZoneResponse> {
    Log.info(`(Delete) Delete zone ${params.id}`);

    const zone = await this.application.deleteZone(
      params.id,
    );
    return {
      status: 200,
      message: `Zone ${params.id} deleted.`,
      data: zone,
    };
  }
}
