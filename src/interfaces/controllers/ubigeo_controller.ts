import {
  Controller,
  Get,
  HttpCode,
  Inject,
  Param,
  UseFilters,
} from '@nestjs/common';
import {
  ApiBadGatewayResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UBIGEO_APPLICATION } from 'src/core/shared/constants/application.constants';
import { UbigeoApplication } from 'src/core/application/Ubigeo/UbigeoApplication';
import { UbigeosResponse } from '../responses/ubigeo.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';
import { SearchRequestDto } from '../request_dto/UbigeoDto/get.ubigeo_dto';

@ApiTags('Ubigeo')
@Controller('/ubigeo')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server.' })
@Auth()
export class UbigeoController {
  constructor(
    @Inject(UBIGEO_APPLICATION)
    private application: UbigeoApplication,
  ) { }

  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: UbigeosResponse,
  })
  @ApiBadGatewayResponse({ description: 'Invalid ubigeo.' })
  @HttpCode(201)
  @Get('/:searchTerm')
  async searchUbigeo(
    @Param('searchTerm') request: SearchRequestDto,
  ): Promise<UbigeosResponse> {
    const ubigeo = await this.application.searchSensitive(`${request}`.toUpperCase());
    return {
      status: 201,
      message: `Ubigeo OK`,
      data: ubigeo,
    };
  }
}
