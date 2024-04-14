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
import { PERSON_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { CreatePersonRequestDto } from '../request_dto/PersonDto/create.person_dto';
import { PersonApplication } from 'src/core/application/Person/PersonApplication';
import { PersonResponse } from '../responses/person.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';

@ApiTags('Company')
@Controller('/company')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
export class PersonController {
  constructor(
    @Inject(PERSON_APPLICATION)
    private application: PersonApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid company create.' })
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
}
