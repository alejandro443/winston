import { OmitType } from '@nestjs/swagger';
import { TypeDocumentDto } from '@src/core/shared/dto/TypeDocument/type_document_dto';

export class CreateTypeDocumentRequestDto extends
  OmitType(TypeDocumentDto, ['code', 'created_at'] as const) { }