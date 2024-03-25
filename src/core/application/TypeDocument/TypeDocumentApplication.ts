import {
  AllTypeDocumentDto,
  NewTypeDocumentDto,
  OneTypeDocumentDto,
  UpdateTypeDocumentDto,
} from 'src/core/shared/dto/TypeDocument/type_document_dto';

export interface TypeDocumentApplication {
  getAllTypeDocument(): Promise<Array<AllTypeDocumentDto>>;
  getOneTypeDocument(code: any): Promise<OneTypeDocumentDto>;
  createTypeDocument(
    type_document: NewTypeDocumentDto,
  ): Promise<OneTypeDocumentDto>;
  updateTypeDocument(
    code: any,
    type_document: UpdateTypeDocumentDto,
  ): Promise<OneTypeDocumentDto>;
  deleteTypeDocument(code: any): any;
}
