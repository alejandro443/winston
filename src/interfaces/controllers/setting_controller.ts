import {
  Body,
  Controller,
  Get,
  HttpCode,
  Inject,
  Param,
  Put,
  UseFilters,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SETTING_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetSettingRequestDto } from '../request_dto/SettingDto/get.setting_dto';
import { SettingApplication } from 'src/core/application/Setting/SettingApplication';
import { SettingResponse } from '../responses/setting.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';
import { UpdateSettingRequestDto } from '../request_dto/SettingDto/update.setting_dto';

@ApiTags('Setting')
@Controller('/setting')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class SettingController {
  constructor(
    @Inject(SETTING_APPLICATION)
    private application: SettingApplication,
  ) {}

  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: SettingResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllSetting(): Promise<SettingResponse> {
    Log.info(`(Get) Get all settings`);

    const settings = await this.application.getAllSetting();
    return {
      status: 201,
      message: `Get all settings`,
      data: settings,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid setting option' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: SettingResponse,
  })
  @HttpCode(201)
  @Get('/one/:option')
  async getOneSetting(
    @Param('option') option: GetSettingRequestDto,
  ): Promise<SettingResponse> {
    Log.info(`(Get) Get setting option: ${option}`);

    const setting = await this.application.getOneSetting(option);
    return {
      status: 201,
      message: `Setting ${option} OK`,
      data: setting,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid setting option' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: SettingResponse,
  })
  @HttpCode(200)
  @Put('/update/:option')
  async updateSetting(
    @Param('option') option: GetSettingRequestDto,
    @Body() request: UpdateSettingRequestDto,
  ): Promise<SettingResponse> {
    Log.info(`(PUT) Put setting`);

    const setting = await this.application.updateSetting(
      option,
      request,
    );
    return {
      status: 200,
      message: `Setting updated.`,
      data: setting,
    };
  }

}
