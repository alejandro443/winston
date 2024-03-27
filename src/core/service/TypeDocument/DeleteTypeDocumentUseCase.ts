import { TypeDocumentService } from 'src/domain/services/TypeDocumentService/TypeDocumentService';

export class DeleteTypeDocumentUseCase {
  constructor(private type_documentService?: TypeDocumentService) {
    this.type_documentService = new TypeDocumentService();
  }

  async deleteTypeDocument(code: string) {
    try {
      const response: any =
        await this.type_documentService?.deleteTypeDocument(code);
      return { id: response.id };
    } catch (error: any) {
      return error;
    }
  }
}
