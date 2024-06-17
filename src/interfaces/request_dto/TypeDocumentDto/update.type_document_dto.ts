import { OmitType } from '@nestjs/swagger';
import { TypeDocumentDto } from '@src/core/shared/dto/TypeDocument/type_document_dto';

export class UpdateTypeDocumentRequestDto extends
  OmitType(TypeDocumentDto, ['id', 'created_at'] as const) { }