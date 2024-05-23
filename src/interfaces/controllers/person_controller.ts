import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Inject,
  Param,
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
import { PERSON_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetPersonRequestDto } from '../request_dto/PersonDto/get.person_dto';
import { CreatePersonRequestDto } from '../request_dto/PersonDto/create.person_dto';
import { PersonApplication } from 'src/core/application/Person/PersonApplication';
import { PersonResponse } from '../responses/person.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('Person')
@Controller('/person')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class PersonController {
  constructor(
    @Inject(PERSON_APPLICATION)
    private application: PersonApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid person main_identification' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: PersonResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllPerson(): Promise<PersonResponse> {
    Log.info(`(Get) Get all persons`);

    const persons = await this.application.getAllPerson();
    return {
      status: 201,
      message: `Get all persons`,
      data: persons,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid person main_identification' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: PersonResponse,
  })
  @HttpCode(201)
  @Get('/one/:main_identification')
  async getOnePerson(
    @Param() request: GetPersonRequestDto,
  ): Promise<PersonResponse> {
    Log.info(
      `(Get) Get person main_identification: ${request.main_identification}`,
    );

    const person = await this.application.getOnePerson(
      request.main_identification,
    );
    return {
      status: 201,
      message: `Person ${request.main_identification} OK`,
      data: person,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid person main_identification' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: PersonResponse,
  })
  @HttpCode(201)
  @Post()
  async createPerson(
    @Body() request: CreatePersonRequestDto,
  ): Promise<PersonResponse> {
    Log.info(`(POST) Create person`);

    const person = await this.application.createPerson(request);
    return {
      status: 201,
      message: `Person ${request.name} created OK`,
      data: person,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid person main_identification' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: PersonResponse,
  })
  @HttpCode(200)
  @Put('/update/:main_identification')
  async updatePerson(
    @Param() params: GetPersonRequestDto,
    @Body() request: CreatePersonRequestDto,
  ): Promise<PersonResponse> {
    Log.info(`(PUT) Put person`);

    const person = await this.application.updatePerson(
      params.main_identification,
      request,
    );
    return {
      status: 200,
      message: `Person updated.`,
      data: person,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid person main_identification' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: PersonResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:main_identification')
  async deletePerson(
    @Param() params: GetPersonRequestDto,
  ): Promise<PersonResponse> {
    Log.info(`(Delete) Delete person ${params.main_identification}`);

    const person = await this.application.deletePerson(
      params.main_identification,
    );
    return {
      status: 200,
      message: `Person ${params.main_identification} deleted.`,
      data: person,
    };
  }
}
