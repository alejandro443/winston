import { UpdateTypeDocumentDto } from 'src/core/shared/dto/TypeDocument/type_document_dto';
import { TypeDocumentService } from 'src/domain/services/TypeDocumentService/TypeDocumentService';

export class UpdateTypeDocumentUseCase {
  constructor(private type_documentService?: TypeDocumentService) {
    this.type_documentService = new TypeDocumentService();
  }

  async updateTypeDocument(code: string, type_document: UpdateTypeDocumentDto) {
    try {
      const response = await this.type_documentService.updateTypeDocument(
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
    } catch (error) {
      return error;
    }
  }
}
