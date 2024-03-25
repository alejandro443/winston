import { UpdateTypeDocumentDto } from 'src/core/shared/dto/TypeDocument/type_document_dto';
import { TypeDocumentService } from 'src/domain/services/TypeDocumentService/TypeDocumentService';

export class UpdateTypeDocumentUseCase {
  constructor(private type_documentService?: TypeDocumentService) {
    this.type_documentService = new TypeDocumentService();
  }

  async updateTypeDocument(code: any, type_document: UpdateTypeDocumentDto) {
    try {
      const response: any = await this.type_documentService?.updateTypeDocument(
        code,
        type_document,
      );
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
