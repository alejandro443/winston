import { OmitType } from '@nestjs/mapped-types';
import { TypeDocumentDto } from '@src/core/shared/dto/TypeDocument/type_document_dto';

export class CreateTypeDocumentRequestDto extends
  OmitType(TypeDocumentDto, ['id', 'created_at'] as const) { }