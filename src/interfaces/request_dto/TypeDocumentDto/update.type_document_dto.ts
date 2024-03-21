import { TypeDocumentDto } from '@src/core/shared/dto/TypeDocument/type_document_dto';

export type UpdateTypeDocumentRequestDto = Omit<TypeDocumentDto, 'id, created_at'>;