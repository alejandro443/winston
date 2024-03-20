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
import { USER_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetUserRequestDto } from '../request_dto/UserDto/get.user_dto';
import { CreateUserRequestDto } from '../request_dto/UserDto/create.user_dto';
import { UserApplication } from 'src/core/application/User/UserApplication';
import { UserResponse, UsersResponse } from '../responses/user.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';

@ApiTags('User')
@Controller('/user')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
export class UserController {
  constructor(
    @Inject(USER_APPLICATION)
    private application: UserApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid user code' })
  @ApiCreatedResponse({
    description: 'The records has been successfully obtain.',
    type: UsersResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllUser(): Promise<UsersResponse> {
    Log.info(`(Get) Get all users`);

    const users = await this.application.getAllUser();
    return {
      status: 201,
      message: `Get all users`,
      data: users,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid user code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: UserResponse,
  })
  @HttpCode(201)
  @Get('/one/:code')
  async getOneUser(@Param() request: GetUserRequestDto): Promise<UserResponse> {
    Log.info(`(Get) Get user code: ${request.code}`);

    const user = await this.application.getOneUser(request.code);
    return {
      status: 201,
      message: `User ${request.code} OK`,
      data: user,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid user code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: UserResponse,
  })
  @HttpCode(201)
  @Post()
  async createUser(
    @Body() request: CreateUserRequestDto,
  ): Promise<UserResponse> {
    Log.info(`(POST) Create user`);

    const user = await this.application.createUser(request);
    return {
      status: 201,
      message: `User ${request.user} created OK`,
      data: user,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid user code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: UserResponse,
  })
  @HttpCode(200)
  @Put('/update/:code')
  async updateUser(
    @Param() params: GetUserRequestDto,
    @Body() request: CreateUserRequestDto,
  ): Promise<UserResponse> {
    Log.info(`(PUT) Put user`);

    const user = await this.application.updateUser(params.code, request);
    return {
      status: 200,
      message: `User updated.`,
      data: user,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid user code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: UserResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:code')
  async deleteUser(@Param() params: GetUserRequestDto): Promise<UserResponse> {
    Log.info(`(Delete) Delete user ${params.code}`);

    const user = await this.application.deleteUser(params.code);
    return {
      status: 200,
      message: `User ${params.code} deleted.`,
      data: user,
    };
  }
}
