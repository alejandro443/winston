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
import { COMPANY_APPLICATION   } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { CreatePersonRequestDto } from '../request_dto/PersonDto/create.person_dto';
import { PersonApplication } from 'src/core/application/Person/PersonApplication';
import { PersonResponse } from '../responses/person.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

// Note: controlador no usado, esto esta en deshuso
@ApiTags('Company')
@Controller('/company')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class CompanyController {
  constructor(
    @Inject(COMPANY_APPLICATION )
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
    Log.info(`(POST) Create company`);

    const person = await this.application.createPerson(request);
    return {
      status: 201,
      message: `Person ${request.name} created OK`,
      data: person,
    };
  }
}
