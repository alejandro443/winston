import { IssuableDocumentService } from 'src/domain/services/IssuableDocumentService/IssuableDocumentService';

export class GetAllIssuableDocumentUseCase {
  constructor(private issuable_documentService?: IssuableDocumentService) {
    this.issuable_documentService = new IssuableDocumentService();
  }

  async getAllIssuableDocument() {
    try {
      const response: any = await this.issuable_documentService?.getAllIssuableDocument();

      return response.map((issuable_document: any) => ({
        id: issuable_document.id,
        code: issuable_document.code,
        name: issuable_document.name,
        description: issuable_document.description,
        status: issuable_document.status,
      }));
    } catch (error: any) {
      return error;
    }
  }
}
