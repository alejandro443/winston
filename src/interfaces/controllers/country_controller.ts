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
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNoContentResponse,
  ApiTags,
} from '@nestjs/swagger';
import { Log } from '../../infraestructure/shared/log/Log';
import { COUNTRY_APPLICATION } from 'src/core/shared/constants/application.constants';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import {
  CountryResponse,
  CountriesResponse,
} from '../responses/country.response';
import { CountryApplication } from 'src/core/application/Country/CountryApplication';
import { GetCountryRequestDto } from '../request_dto/CountryDto/get.country_dto';
import { CreateCountryRequestDto } from '../request_dto/CountryDto/create.country_dto';
import { UpdateCountryRequestDto } from '../request_dto/CountryDto/update.country_dto';

@ApiTags('Country')
@Controller('/country')
@UseFilters(ApplicationCreatorFilter)
export class CountryController {
  constructor(
    @Inject(COUNTRY_APPLICATION)
    private application: CountryApplication,
  ) {}

  @ApiOkResponse({
    description: 'The records has been successfully obtain.',
    type: CountriesResponse,
  })
  @ApiNoContentResponse({ description: 'Records not found.' })
  @ApiBadRequestResponse({ description: 'Invalid country id' })
  @HttpCode(200)
  @Get('/all')
  async getAllCountry(): Promise<CountriesResponse> {
    Log.info('(GET) Get all countrys');
    const countrys = await this.application.getAllCountry();
    if (countrys.length > 0) {
      return {
        status: 200,
        message: 'All records found.',
        data: countrys,
      };
    } else {
      return {
        status: 204,
        message: 'Records not found.',
        data: countrys,
      };
    }
  }

  @ApiOkResponse({
    description: 'The record has been successfully obtain.',
    type: CountryResponse,
  })
  @ApiNoContentResponse({ description: 'The record not found.' })
  @ApiBadRequestResponse({ description: 'Invalid country id.' })
  @HttpCode(200)
  @Get('/one/:id')
  async getOneCountry(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CountryResponse> {
    Log.info(`(GET) Get country id: ${id}`);
    const country = await this.application.getOneCountry(id);
    if (country.id != null) {
      return {
        status: 200,
        message: `Country ${id} find.`,
        data: country,
      };
    } else {
      return {
        status: 204,
        message: `The record not found.`,
        data: country,
      };
    }
  }

  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CountryResponse,
  })
  @ApiBadRequestResponse({ description: 'Invalid country id' })
  @HttpCode(201)
  @Post()
  async createCountry(
    @Body() request: CreateCountryRequestDto,
  ): Promise<CountryResponse> {
    Log.info(`(POST) Create country`);
    const country = await this.application.createCountry(request);
    return {
      status: 201,
      message: `Country ${request.name} created OK`,
      data: country,
    };
  }

  @ApiOkResponse({
    description: 'The record has been successfully updated.',
    type: CountryResponse,
  })
  @ApiBadRequestResponse({ description: 'Invalid country id' })
  @HttpCode(200)
  @Put('/update/:id')
  async updateCountry(
    @Param('id', ParseIntPipe) id: number,
    @Body() request: UpdateCountryRequestDto,
  ): Promise<CountryResponse> {
    Log.info(`(PUT) Put country`);
    const country = await this.application.updateCountry(id, request);
    return {
      status: 200,
      message: `Country updated.`,
      data: country,
    };
  }

  @ApiOkResponse({
    description: 'The record has been successfully deleted.',
    type: CountryResponse,
  })
  @ApiBadRequestResponse({ description: 'Invalid country id' })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteCountry(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CountryResponse> {
    Log.info(`(DELETE) Delete country ${id}`);
    const country = await this.application.deleteCountry(id);
    return {
      status: 200,
      message: `Country ${id} deleted.`,
      data: country,
    };
  }
}
