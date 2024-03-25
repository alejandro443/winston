import { TypeDocumentService } from 'src/domain/services/TypeDocumentService/TypeDocumentService';

export class GetOneTypeDocumentUseCase {
  constructor(private type_documentService?: TypeDocumentService) {
    this.type_documentService = new TypeDocumentService();
  }

  async getOneTypeDocument(code: string) {
    try {
      const response: any = await this.type_documentService?.getOneTypeDocument(code);
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        status: response.status,
      };
    } catch (error: any) {
      return error;
    }
  }
}
