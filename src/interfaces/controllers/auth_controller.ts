import {
  Body,
  Controller,
  HttpCode,
  Inject,
  Post,
  UseFilters,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AUTH_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { AuthenticationApplication } from '@src/core/application/Authentication/AuthenticationApplication';
import { LoginRequestDto, LoginResponseDto } from '../request_dto/AuthDto/login.auth_dto';
import { LoginResponse } from '../responses/auth.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';

@ApiTags('Authentication')
@Controller('/auth')
@ApiInternalServerErrorResponse({ description: 'Error server' })
export class AuthController {
  constructor(
    @Inject(AUTH_APPLICATION)
    private application: AuthenticationApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Autenticación erroneo.' })
  @ApiCreatedResponse({
    description: 'Autenticación existosa.',
    type: LoginResponseDto,
  })
  @HttpCode(200)
  @UseFilters(ApplicationCreatorFilter)
  @Post('/login')
  async Login(
    @Body() request: LoginRequestDto,
  ): Promise<LoginResponse> {
    Log.info(`Login`);

    const user = await this.application.loginAuth(request);
    return {
      status: 200,
      message: `Loggin OK`,
      data: user,
    };
  }
}
