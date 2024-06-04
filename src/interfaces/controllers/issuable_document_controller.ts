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
import { ISSUABLE_DOCUMENT_APPLICATION } from 'src/core/shared/constants/application.constants';
import { Log } from '../../infraestructure/shared/log/Log';
import { IssuableDocumentApplication } from 'src/core/application/IssuableDocument/IssuableDocumentApplication';
import { IssuableDocumentResponse } from '../responses/issuable_document.response';
import { ApplicationCreatorFilter } from '../exception_filters/application.exception_filter';
import { Auth } from '@src/core/decorators/auth.decorator';

@ApiTags('IssuableDocument')
@Controller('/issuable_document')
@UseFilters(ApplicationCreatorFilter)
@ApiInternalServerErrorResponse({ description: 'Error server' })
@Auth()
export class IssuableDocumentController {
  constructor(
    @Inject(ISSUABLE_DOCUMENT_APPLICATION)
    private application: IssuableDocumentApplication,
  ) {}

  @ApiBadRequestResponse({ description: 'Invalid issuable_document code' })
  @ApiCreatedResponse({
    description: 'The record has been successfully obtain.',
    type: IssuableDocumentResponse,
  })
  @HttpCode(201)
  @Get('/all')
  async getAllIssuableDocument(): Promise<IssuableDocumentResponse> {
    Log.info(`(Get) Get all issuable_documents`);

    const issuable_documents = await this.application.getAllIssuableDocument();
    return {
      status: 201,
      message: `Get all issuable_documents`,
      data: issuable_documents,
    };
  }
}
