import { Body, Controller, Delete, Get, HttpCode, Inject, Param, Post, Put, UseFilters } from "@nestjs/common";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiTags } from "@nestjs/swagger";
import { GROUP_APPLICATION } from "src/core/shared/constants/application.constants";
import { AppResponse } from "../../infraestructure/responses/app.response";
import { Log } from "../../infraestructure/shared/log/Log";
import { GetGroupRequestDto } from "../request_dto/GroupDto/get.group_dto";
import { CreateGroupRequestDto } from "../request_dto/GroupDto/create.group_dto";
import { GroupApplication } from "src/core/application/Group/GroupApplication";
import { GroupCreatorFilter } from "../exception_filters/group.exception_filter";

@ApiTags('Group')
@Controller('/group')
@UseFilters(GroupCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
export class GroupController {

  constructor(
    @Inject(GROUP_APPLICATION) 
    private application: GroupApplication
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid group code' })
  @ApiCreatedResponse({ description: 'The record has been successfully obtain.', type: AppResponse })
  @HttpCode(201)
  @Get('/all')
  async getAllGroup(): Promise<AppResponse> {
    Log.info(`(Get) Get all groups`)

    const groups = await this.application.getAllGroup()
    return {
      status: 201,
      message: `Get all groups`,
      data: groups
    }
  }
  
  @ApiBadRequestResponse({ description: 'Invalid group code' })
  @ApiCreatedResponse({ description: 'The record has been successfully obtain.', type: AppResponse })
  @HttpCode(201)
  @Get('/one/:code')
  async getOneGroup(@Param() request: GetGroupRequestDto): Promise<AppResponse> {
    Log.info(`(Get) Get group code: ${request.code}`)

    const group = await this.application.getOneGroup(request.code)
    return {
      status: 201,
      message: `Group ${request.code} OK`,
      data: group
    }
  }

  @ApiBadRequestResponse({ description: 'Invalid group code' })
  @ApiCreatedResponse({ description: 'The record has been successfully created.', type: AppResponse })
  @HttpCode(201)
  @Post()
  async createGroup(@Body() request: CreateGroupRequestDto): Promise<AppResponse> {
    Log.info(`(POST) Create group`)

    const group = await this.application.createGroup(request)
    return {
      status: 201,
      message: `Group ${request.name} created OK`,
      data: group
    }
  }

  @ApiBadRequestResponse({ description: 'Invalid group code' })
  @ApiCreatedResponse({ description: 'The record has been successfully updated.', type: AppResponse })
  @HttpCode(200)
  @Put('/update/:code')
  async updateGroup(@Param() params: GetGroupRequestDto, @Body() request: CreateGroupRequestDto): Promise<AppResponse> {
    Log.info(`(PUT) Put group`)

    const group = await this.application.updateGroup(params.code, request)
    return {
      status: 200,
      message: `Group updated.`,
      data: group
    }
  }
  
  @ApiBadRequestResponse({ description: 'Invalid group code' })
  @ApiCreatedResponse({ description: 'The record has been successfully deleted.', type: AppResponse })
  @HttpCode(200)
  @Delete('/delete/:code')
  async deleteGroup(@Param() params: GetGroupRequestDto): Promise<AppResponse> {
    Log.info(`(Delete) Delete group ${params.code}`)

    const group = await this.application.deleteGroup(params.code)
    return {
      status: 200,
      message: `Group ${params.code} deleted.`,
      data: group
    }
  }
}