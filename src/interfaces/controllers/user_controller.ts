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
import { USER_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetUserRequestDto } from '../request_dto/UserDto/get.user_dto';
import { CreateUserRequestDto, CreateUserWithRolesRequestDto } from '../request_dto/UserDto/create.user_dto';
import { UserApplication } from 'src/core/application/User/UserApplication';
import { UserResponse, UserWithPersonResponse, UsersResponse } from '../responses/user.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('User')
@Controller('/user')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class UserController {
  constructor(
    @Inject(USER_APPLICATION)
    private application: UserApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid user id' })
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

  @ApiBadRequestResponse({ description: 'Invalid user id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: UserResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneUser(@Param('id', ParseIntPipe) id: GetUserRequestDto): Promise<UserResponse> {
    Log.info(`(Get) Get user id: ${id}`);

    const user = await this.application.getOneUser(id);
    return {
      status: 201,
      message: `User ${id} OK`,
      data: user,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid user id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: UserResponse,
  })
  @HttpCode(201)
  @Post('/only_user')
  async createEntityUser(
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

  @ApiBadRequestResponse({ description: 'Invalid user id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: UserResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateUser(
    @Param('id', ParseIntPipe) id: GetUserRequestDto,
    @Body() request: CreateUserRequestDto,
  ): Promise<UserResponse> {
    Log.info(`(PUT) Put user`);

    const user = await this.application.updateUser(id, request);
    return {
      status: 200,
      message: `User updated.`,
      data: user,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid user id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: UserResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteUser(@Param('id', ParseIntPipe) id: GetUserRequestDto): Promise<UserResponse> {
    Log.info(`(Delete) Delete user ${id}`);

    const user = await this.application.deleteUser(id);
    return {
      status: 200,
      message: `User ${id} deleted.`,
      data: user,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid user id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: UserWithPersonResponse,
  })
  @HttpCode(201)
  @Post()
  async createUserWithPerson(
    @Body() request: CreateUserWithRolesRequestDto,
  ): Promise<UserWithPersonResponse> {
    Log.info(`(POST) Create user with person`);

    const user = await this.application.createUserWithPerson(request);
    return {
      status: 201,
      message: `User with person: ${request.user} created OK`,
      data: user,
    };
  }
  
  @HttpCode(201)
  @Get('/all_with_roles')
  async getAllUserWithRoles(): Promise<UsersResponse> {
    Log.info(`(Get) Get all users`);

    const users = await this.application.getAllUserWithRoles();
    return {
      status: 201,
      message: `Get all users`,
      data: users,
    };
  }

}
