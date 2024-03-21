import {
  AllTypeDocumentDto,
  NewTypeDocumentDto,
  OneTypeDocumentDto,
  UpdateTypeDocumentDto,
} from '@dto/TypeDocument/type_document_dto';

export interface TypeDocumentApplication {
  getAllTypeDocument(): Promise<Array<AllTypeDocumentDto>>;
  getOneTypeDocument(code: string): Promise<OneTypeDocumentDto>;
  createTypeDocument(
    type_document: NewTypeDocumentDto,
  ): Promise<OneTypeDocumentDto>;
  updateTypeDocument(
    code: string,
    type_document: UpdateTypeDocumentDto,
  ): Promise<OneTypeDocumentDto>;
  deleteTypeDocument(code: string);
}
