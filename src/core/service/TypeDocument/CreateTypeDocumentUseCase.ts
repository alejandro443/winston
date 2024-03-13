import { TypeDocumentService } from "src/domain/services/TypeDocumentService/TypeDocumentService"
import { NewTypeDocumentDto } from "src/core/shared/dto/TypeDocument/type_document_dto";

export class CreateTypeDocumentUseCase {

  constructor(
    private type_documentService?: TypeDocumentService
  ) {
    this.type_documentService = new TypeDocumentService()
  }
  
async createTypeDocument(type_document: NewTypeDocumentDto) {
    try {
      var response = await this.type_documentService.createTypeDocument(type_document)
      return {
        id: response.id,
        code: response.code,
        name: response.name,
        description: response.description,
        status: response.status
      }
    } catch (error) {
      return error
    }
  }
}