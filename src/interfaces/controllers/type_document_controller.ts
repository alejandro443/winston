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
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TYPE_DOCUMENT_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { GetTypeDocumentRequestDto } from '../request_dto/TypeDocumentDto/get.type_document_dto';
import { CreateTypeDocumentRequestDto } from '../request_dto/TypeDocumentDto/create.type_document_dto';
import { TypeDocumentApplication } from 'src/core/application/TypeDocument/TypeDocumentApplication';
import { TypeDocumentResponse } from '../responses/type_document.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('TypeDocument')
@Controller('/type_document')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class TypeDocumentController {
  constructor(
    @Inject(TYPE_DOCUMENT_APPLICATION)
    private application: TypeDocumentApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid type_document id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: TypeDocumentResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllTypeDocument(): Promise<TypeDocumentResponse> {
    Log.info(`(Get) Get all type_documents`);

    const type_documents = await this.application.getAllTypeDocument();
    return {
      status: 201,
      message: `Get all type_documents`,
      data: type_documents,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid type_document id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: TypeDocumentResponse,
  })
  @HttpCode(201)
  @Get('/one/:id')
  async getOneTypeDocument(
    @Param('id', ParseIntPipe) request: GetTypeDocumentRequestDto,
  ): Promise<TypeDocumentResponse> {
    Log.info(`(Get) Get type_document id: ${request.id}`);

    const type_document = await this.application.getOneTypeDocument(
      request.id,
    );
    return {
      status: 201,
      message: `TypeDocument ${request.id} OK`,
      data: type_document,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid type_document id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: TypeDocumentResponse,
  })
  @HttpCode(201)
  @Post()
  async createTypeDocument(
    @Body() request: CreateTypeDocumentRequestDto,
  ): Promise<TypeDocumentResponse> {
    Log.info(`(POST) Create type_document`);

    const type_document = await this.application.createTypeDocument(request);
    return {
      status: 201,
      message: `TypeDocument ${request.name} created OK`,
      data: type_document,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid type_document id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully updated.',
    type: TypeDocumentResponse,
  })
  @HttpCode(200)
  @Put('/update/:id')
  async updateTypeDocument(
    @Param('id', ParseIntPipe) params: GetTypeDocumentRequestDto,
    @Body() request: CreateTypeDocumentRequestDto,
  ): Promise<TypeDocumentResponse> {
    Log.info(`(PUT) Put type_document`);

    const type_document = await this.application.updateTypeDocument(
      params.id,
      request,
    );
    return {
      status: 200,
      message: `TypeDocument updated.`,
      data: type_document,
    };
  }

  @ApiBadRequestResponse({ description: 'Invalid type_document id' })
  @ApiCreatedResponse({
    description: 'The record has been successfully deleted.',
    type: TypeDocumentResponse,
  })
  @HttpCode(200)
  @Delete('/delete/:id')
  async deleteTypeDocument(
    @Param('id', ParseIntPipe) params: GetTypeDocumentRequestDto,
  ): Promise<TypeDocumentResponse> {
    Log.info(`(Delete) Delete type_document ${params.id}`);

    const type_document = await this.application.deleteTypeDocument(
      params.id,
    );
    return {
      status: 200,
      message: `TypeDocument ${params.id} deleted.`,
      data: type_document,
    };
  }
}
