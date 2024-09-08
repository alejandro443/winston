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
import { POINT_SALE_USER_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetRequestDto } from '../request_dto/PointSaleUserDto/get.point_sale_user_dto';
import { CreateRequestDto } from '../request_dto/PointSaleUserDto/create.point_sale_user_dto';
import { PointSaleUserApplication } from 'src/core/application/PointSaleUser/PointSaleUserApplication';
import { PointSaleUserResponse } from '../responses/point_sale_user.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('PointSaleUser')
@Controller('/point_sale_user')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class PointSaleUserController {
  constructor(
    @Inject(POINT_SALE_USER_APPLICATION)
    private application: PointSaleUserApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid point_sale_user id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: PointSaleUserResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllPointSaleUser(): Promise<PointSaleUserResponse> {
    Log.info(`(Get) Get all point_sale_users`);

    const point_sale_users = await this.application.ServiceGetAll();
    return {
      status: 201,
      message: `Get all point_sale_users`,
      data: point_sale_users,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid point_sale_user id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: PointSaleUserResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOnePointSaleUser(
    @Param() request: GetRequestDto,
  ): Promise<PointSaleUserResponse> {
    Log.info(`(Get) Get point_sale_user id: ${request.id}`);

    const point_sale_user = await this.application.ServiceGetOne(
      request.id,
    );
    return {
      status: 201,
      message: `PointSaleUser ${request.id} OK`,
      data: point_sale_user,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid point_sale_user id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: PointSaleUserResponse,
  })
  @HttpCode(201)
  @Post()
  async createPointSaleUser(
    @Body() request: CreateRequestDto,
  ): Promise<PointSaleUserResponse> {
    Log.info(`(POST) Create point_sale_user`);

    const point_sale_user = await this.application.ServiceCreate(request);
    return {
      status: 201,
      message: `PointSaleUser ${request.user_id} created OK`,
      data: point_sale_user,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid point_sale_user id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: PointSaleUserResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updatePointSaleUser(
    @Param() params: GetRequestDto,
    @Body() request: CreateRequestDto,
  ): Promise<PointSaleUserResponse> {
    Log.info(`(PUT) Put point_sale_user`);

    const point_sale_user = await this.application.ServiceUpdate(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `PointSaleUser updated.`,
      data: point_sale_user,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid point_sale_user id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: PointSaleUserResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deletePointSaleUser(
    @Param() params: GetRequestDto,
  ): Promise<PointSaleUserResponse> {
    Log.info(`(Delete) Delete point_sale_user ${params.id}`);

    const point_sale_user = await this.application.ServiceDelete(
      params.id,
    );
    return {
      status: 200,
      message: `PointSaleUser ${params.id} deleted.`,
      data: point_sale_user,
    };
  }
}
