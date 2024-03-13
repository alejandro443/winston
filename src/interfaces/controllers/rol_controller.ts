import { Body, Controller, Inject, Post, UseFilters } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RolCreatorFilter } from '../exception_filters/rol.exception_filter';
import { AppResponse } from '../../infraestructure/responses/app.response';
import { Log } from '../../infraestructure/shared/log/Log';
import { CreateRolRequestDto } from '../request_dto/RolDto/create.rol_dto';
import { ROL_APPLICATION } from '../../core/shared/constants/application.constants';
import { RolApplication } from '../../core/application/Rol/RolApplication';

@ApiTags('Roles')
@Controller('/rol')
@UseFilters(RolCreatorFilter)
export class RolController {
  constructor(@Inject(ROL_APPLICATION) private application: RolApplication) {}

  // @ApiBadRequestResponse({ description: 'Invalid user id or supplier id' })
  // @ApiInternalServerErrorResponse({ description: 'Error server' })
  // @ApiCreatedResponse({ description: 'The record has been successfully created.', type: AppResponse })
  @HttpErrorByCode(201)
  @Post()
  async createRol(@Body() request: CreateRolRequestDto): Promise<AppResponse> {
    Log.info(`(POST) Create rol`);

    const rolId = await this.application.createRol(request);
    return {
      status: 201,
      message: `Rol ${request.name} created OK`,
      data: rolId,
    };
  }
}
