import { TypeDocumentService } from "src/domain/services/TypeDocumentService/TypeDocumentService"

export class GetAllTypeDocumentUseCase {

  constructor(
    private type_documentService?: TypeDocumentService
  ) {
    this.type_documentService = new TypeDocumentService()
  }

  async getAllTypeDocument() {
    try {
      var response = await this.type_documentService.getAllTypeDocument()

      return response.map(type_document => ({
        id: type_document.id,
        code: type_document.code,
        name: type_document.name,
        description: type_document.description,
        status: type_document.status
      }))
    } catch (error) {
      return error
    }
  }
}