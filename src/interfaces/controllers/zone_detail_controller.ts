import {
  Controller,
  Get,
  HttpCode,
  Inject,
  UseFilters,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ZONE_DETAIL_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { ZoneDetailApplication } from 'src/core/application/ZoneDetail/ZoneDetailApplication';
import { ZoneDetailsResponse } from '../responses/zone_detail.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('ZoneDetail')
@Controller('/zone_detail')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class ZoneDetailController {
  constructor(
    @Inject(ZONE_DETAIL_APPLICATION)
    private application: ZoneDetailApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid zone id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: ZoneDetailsResponse,
  })
  @HttpCode(201)
  @Get('')
  async getAllZoneDetail(): Promise<ZoneDetailsResponse> {
    Log.info(`(Get) Get all zone details`);

    const zone_details = await this.application.getAllZoneDetail();
    return {
      status: 201,
      message: `Get all zone details`,
      data: zone_details,
    };
  }
}
