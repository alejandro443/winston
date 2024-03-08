import { Body, Controller, HttpCode, Inject, Post, UseFilters } from "@nestjs/common";
import { ApiBadRequestResponse, ApiCreatedResponse, ApiInternalServerErrorResponse, ApiTags } from "@nestjs/swagger";
import { RolCreatorFilter } from "../exception_filters/rol.exception_filter";
import { ROL_APPLICATION } from "src/core/shared/constants/application.constants";
import { RolApplication } from "src/core/application/Rol/RolApplication";
import { AppResponse } from "../../infraestructure/responses/app.response";
import { Log } from "../../infraestructure/shared/log/Log";
import { CreateRolRequestDto } from "../request_dto/Rol/create.rol.dto";

@ApiTags('Roles')
@Controller('/rol')
@UseFilters(RolCreatorFilter)
export class RolController {

  constructor(@Inject(ROL_APPLICATION) private application: RolApplication) { }

  // @ApiBadRequestResponse({ description: 'Invalid user id or supplier id' })
  // @ApiInternalServerErrorResponse({ description: 'Error server' })
  // @ApiCreatedResponse({ description: 'The record has been successfully created.', type: AppResponse })
  @HttpCode(201)
  @Post()
  async createRol(@Body() request: CreateRolRequestDto): Promise<AppResponse> {
    Log.info(`(POST) Create rol`)

    const rolId = await this.application.createRol(request)
    return {
      status: 201,
      message: `Rol ${request.name} created OK`,
      data: rolId
    }
  }
}