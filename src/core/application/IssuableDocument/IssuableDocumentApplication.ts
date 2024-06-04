import {
  AllIssuableDocumentDto
} from 'src/core/shared/dto/IssuableDocument/issuable_document_dto';

export interface IssuableDocumentApplication {
  getAllIssuableDocument(): Promise<Array<AllIssuableDocumentDto>>;
}
