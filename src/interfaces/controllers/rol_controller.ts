import {
  Body,
  Controller,
  HttpCode,
  Inject,
  Post,
  UseFilters,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Log } from '../../infraestructure/shared/log/Log';
import { CreateRolRequestDto } from '../request_dto/RolDto/create.rol_dto';
import { ROL_APPLICATION } from '../../core/shared/constants/application.constants';
import { RolApplication } from '../../core/application/Rol/RolApplication';
import { RolResponse } from '../responses/rol.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';

@ApiTags('Roles')
@Controller('/rol')
@UseFilters(ApplicationCreatorFilter)
export class RolController {
  constructor(@Inject(ROL_APPLICATION) private application: RolApplication) {}

  // @ApiBadRequestResponse({ description: 'Invalid user id or supplier id' })
  // @ApiInternalServerErrorResponse({ description: 'Error server' })
  // @ApiCreatedResponse({ description: 'The record has been successfully created.', type: AppResponse })
  @HttpCode(201)
  @Post()
  async createRol(@Body() request: CreateRolRequestDto): Promise<RolResponse> {
    Log.info(`(POST) Create rol`);

    const rol_data = await this.application.createRol(request);
    return {
      status: 201,
      message: `Rol ${request.name} created OK`,
      data: rol_data,
    };
  }
}
