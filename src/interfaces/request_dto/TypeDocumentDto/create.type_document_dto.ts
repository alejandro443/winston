import { TypeDocumentDto } from '@src/core/shared/dto/TypeDocument/type_document_dto';

export class CreateTypeDocumentRequestDto
  extends TypeDocumentDto
  implements Omit<TypeDocumentDto, 'id, created_at'> {}
